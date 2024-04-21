import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-storage.js";
import {
  setDoc,
  doc,
  getFirestore,
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmmXk_QPtXxgx92Et7Lu7NA_FJi8inybM",
  authDomain: "ameen-chat-app-js.firebaseapp.com",
  projectId: "ameen-chat-app-js",
  storageBucket: "ameen-chat-app-js.appspot.com",
  messagingSenderId: "860268832695",
  appId: "1:860268832695:web:8f524ff7c94782c04d6a32",
  measurementId: "G-2JJ2H1Z3GG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();
const currentPageName = window.location.pathname.split("/").pop();

const loginBtn = document.getElementById("loginBtn");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const logoutBtn = document.getElementById("logoutBtn");
const messageInput = document.getElementById("messageInput");
const messageContainer = document.getElementById("messageContainer");
const emailText = document.getElementById("emailText");
const fileUploadBtn = document.getElementById("fileUploadBtn");
const fileInput = document.getElementById("fileUpload");
const cancelImageBtn = document.getElementById("cancelImageBtn");
const progressID = document.getElementById("progressID");
const progressBar = document.getElementById("progressBar");
const imagePreview = document.getElementById("imagePreview");
const preview = document.getElementById("preview");
const imageController = document.getElementById("imageController");

const uploadTypes = {
  image: "image",
  video: "video",
  audio: "audio",
};

function scrollToBottom() {
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

const loadMessages = ({ uid }) => {
  const q = query(collection(db, "messages"), orderBy("createdAt"), limit(25));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const messagesHTML = querySnapshot.docs
      .map((doc) => {
        const messages = doc.data();
        const timestamp = messages.createdAt;
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedTime = `${hours}:${minutes}`;

        const isMyChat = messages.uid === uid ? "chat-end" : "chat-start";
        const chatType =
          messages.type === uploadTypes.image
            ? `<a target="_blank" href=${messages.imageURL}><img width='300' height='300' src=${messages.imageURL}  /></a>`
            : messages.text;

        return `
          <div class="chat ${isMyChat}">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="${messages.photoURL}" />
              </div>
            </div>
            <div class="chat-header">
              ${messages.displayName}
              <time class="text-xs opacity-50">${formattedTime}</time>
            </div>
            <div class='chat-bubble'>${chatType}</div>
            <div class="chat-footer opacity-50">Delivered</div>
          </div>
        `;
      })
      .join("");

    messageContainer.innerHTML = messagesHTML;
    scrollToBottom();
  });
};

const onLoad = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      loadMessages(user);
      emailText && (emailText.innerText = user.email);
      if (currentPageName !== "" && currentPageName !== "index.html") {
        window.location.href = "/";
      }
    } else {
      if (currentPageName !== "login.html") {
        window.location.href = "login.html";
      }
    }
  });
};
onLoad();

const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {})
    .catch((error) => {});
};

const sendMessage = async ({ type = "text", imageURL }) => {
  const user = auth.currentUser;
  const text = messageInput.value;
  const id = Date.now();
  try {
    if (user) {
      if (text.trim() || type === uploadTypes.image) {
        const { email, displayName, photoURL, uid } = user;
        const payload = {
          createdAt: id,
          dicId: id,
          text,
          uid,
          email,
          displayName,
          photoURL,
          type,
          ...(type === uploadTypes.image && { imageURL }),
        };

        await setDoc(doc(db, "messages", `${id}`), payload);
        messageInput.value = "";
        scrollToBottom();
      } else {
        alert("Please Input Text");
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const logout = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
};

const uploadImage = () => {
  const messageStorageDir = "images/";
  const file = fileInput.files[0];

  const metadata = {
    name: file.name,
    size: file.size,
    type: file.type,
  };

  if (!file) {
    return alert("No file selected");
  }

  if (
    !metadata.type.startsWith("image/") &&
    !metadata.type.startsWith("video/")
  ) {
    return alert("Invalid file type. Please select an image or video.");
  }

  const fileName = `${file.name}_${Date.now()}`;
  const storageRef = ref(storage, messageStorageDir + fileName);

  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      progressID.classList.remove("hidden");
      progressBar.value = progress;
      imageController.classList.add("hidden");

      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      switch (error.code) {
        case "storage/unauthorized":
          console.log("User doesn't have permission to access the object");
          break;
        case "storage/canceled":
          console.log(" User canceled the upload");
          break;
        case "storage/unknown":
          console.log("Unknown error occurred, inspect error.serverResponse");
          break;
      }
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((imageURL) => {
        sendMessage({ type: uploadTypes.image, imageURL })
          .then(() => {
            cancelImage();
          })
          .catch((error) => {
            console.log("Error sending message");
          });
      });
    }
  );
};

const previewImage = () => {
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;

      imagePreview.classList.remove("hidden");
    };

    reader.readAsDataURL(file);
  }
};

const cancelImage = () => {
  fileInput.value = null;

  imagePreview.classList.add("hidden");

  preview.src = "";
};

loginBtn && loginBtn.addEventListener("click", loginWithGoogle);
sendMessageBtn && sendMessageBtn.addEventListener("click", sendMessage);
logoutBtn && logoutBtn.addEventListener("click", logout);
fileUploadBtn && fileUploadBtn.addEventListener("click", uploadImage);
fileInput && fileInput.addEventListener("change", previewImage);
cancelImageBtn && cancelImageBtn.addEventListener("click", cancelImage);
