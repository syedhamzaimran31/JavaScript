import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

import {
  setDoc,
  doc,
  getFirestore,
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAsXd47eqBB4n0BIf8Hhepz0TE77pz3KUQ",
  authDomain: "chat-app-smit-hamza.firebaseapp.com",
  projectId: "chat-app-smit-hamza",
  storageBucket: "chat-app-smit-hamza.appspot.com",
  messagingSenderId: "1053114313183",
  appId: "1:1053114313183:web:09016b97a908642b373c6a",
  measurementId: "G-WML1T2V1ZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);
const currentPageName = window.location.pathname.split("/").pop();

const signUpInput = document.getElementById("signUpEmail");
const signUpPassowrd = document.getElementById("signUpPassowrd");
const signUpRe_Passowrd = document.getElementById("retypePassword");
const alreadySignUp = document.getElementById("alreadySignUpText");
const signUpBtn = document.getElementById("btnSignUp");

const forgetPassword = document.getElementById("forgetPassword");
const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");
const signInBtn = document.getElementById("btnSignIn");
const signInBtnGoogle = document.getElementById("btnSignInGoogle");
const signUpText = document.getElementById("SignUpText");

const signOutBtn = document.getElementById("btnSignOut");
const emailText = document.getElementById("emailText");
const logOut = document.getElementById("Logout");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const messageInput = document.getElementById("messageInput");
const messageContainer = document.getElementById("messageContainer");
const fileUploadBtn = document.getElementById("fileUploadBtn");
const fileInput = document.getElementById("fileUpload");
const cancelImageBtn = document.getElementById("cancelImageBtn");
const progressID = document.getElementById("progressID");
const progressBar = document.getElementById("progressBar");
const imagePreview = document.getElementById("imagePreview");
const preview = document.getElementById("preview");
const imageController = document.getElementById("imageController");
const profileImage = document.getElementById("profileImage");

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

  if (!metadata.type.startsWith("image/")) {
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

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

const signinWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("signIn Successful");
    })
    .catch((error) => {
      console.log("signIn Failed");
    });
};

const signOutGoogle = () => {
  signOut(auth)
    .then(() => {
      console.log("signOut Successful");
    })
    .catch((error) => {
      console.log("signOut Failed");
    });
};

const onLoad = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      loadMessages(user);
      emailText && (emailText.innerText = ` ${user.email}`);
      console.log(user.email);
      if (currentPageName !== "" && currentPageName !== "Dashboard.html") {
        window.location.href = "Dashboard.html";
      }
    } else {
      if (currentPageName !== "index.html") {
        window.location.href = "index.html";
      }
    }
  });
  // signUpText && signUpText?.addEventListener("click",function () {
  //   if (currentPageName == "index.html") {
  //     window.location.href = "signup.html";

  //   }
  // });
};
onLoad();
 // change theme using Daisy ui

 const signUpEami_value=signUpInput && signUpInput.value;
 const signUpPassowrd_value=signUpPassowrd && signUpPassowrd.value
const signUp = () => {
  createUserWithEmailAndPassword(auth, signUpEami_value, signUpPassowrd_value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    console.log(errorMessage)
    });
};

signUpText &&
  signUpText?.addEventListener("click", function () {
    window.location.href = "signup.html";
  });
signUpBtn && signUpBtn.addEventListener("click", signUp);
signInBtnGoogle && signInBtnGoogle.addEventListener("click", signinWithGoogle);
signOutBtn && signOutBtn.addEventListener("click", signOutGoogle);
logOut && logOut.addEventListener("click", signOutGoogle);
fileUploadBtn && fileUploadBtn.addEventListener("click", uploadImage);
fileInput && fileInput.addEventListener("change", previewImage);
cancelImageBtn && cancelImageBtn.addEventListener("click", cancelImage);
sendMessageBtn && sendMessageBtn.addEventListener("click", sendMessage);

