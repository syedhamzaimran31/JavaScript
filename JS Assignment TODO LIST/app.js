//get all elements from html by using their ID
let saveBtn = document.getElementById("saveBtn");
let addBtn = document.getElementById("addBtn");
let inputField = document.getElementById("toDoInput");
let todoList = document.getElementById("toDoList");
let deleteAllBtn = document.getElementById("deleteAllBtn");
let todoInput = document.getElementById("toDoInput");

let editLi = null;
let todoInputValue = todoInput.value;

deleteAllBtn.style.display = "none";
saveBtn.style.display = "none";

//add List item with edit and delete buttons
addBtn.addEventListener("click", function () {
  let todoInput = document.getElementById("toDoInput");
  let todoInputValue = todoInput.value;

  //check the input should not be empty
  if (todoInputValue.trim()) {
    //crate a list, assign class name to list and set input value into the List
    let createLi = document.createElement("li");
    createLi.className = "listCreated";
    createLi.innerText = todoInputValue;

    //create an edit button assign a class name matching with bootstrap
    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-outline-primary";
    editBtn.innerText = "Edit";
    createLi.appendChild(editBtn);

    //create an delet button assign a class name matching with bootstrap
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-outline-danger";
    createLi.appendChild(deleteBtn);

    todoList.appendChild(createLi);
    deleteAllBtn.style.display = "inline-block";

    //on pressing delete button remove the list
    deleteBtn.addEventListener("click", function () {
      createLi.remove();
      checkDeleteAllBtnDisplay();
    });

    //on pressing edit button set list value in input so user can edit it
    // replace add button with save button
    editBtn.addEventListener("click", function () {
      let editText = createLi.childNodes[0].nodeValue;
      todoInput.value = editText;
      saveBtn.style.display = "inline-block";
      addBtn.style.display = " none";
      editLi = createLi;
    });
  } else {
    alert("Please Input To Do");
  }

  todoInput.value = "";
});

// on pressing save button update the list with the updated input value from user
//replace save button with add button
saveBtn.addEventListener("click", function () {
  if (todoInput.value.trim() === "") {
    alert("Please fill input first");
  } else {
    saveBtn.style.display = "none";
    addBtn.style.display = "inline-block";
    let textNode = editLi.childNodes[0];
    textNode.nodeValue = todoInput.value;
    todoInput.value = "";
  }
});

//on pressing delete all button show a confirmation box whether to delete all list created or not
deleteAllBtn.addEventListener("click", function () {
  let confirmText = "Do you want to delete all the to do's";
  if (confirm(confirmText) == true) {
    if (todoList.children.length > 0) {
      todoList.innerHTML = null;
      saveBtn.style.display="none"
      addBtn.style.display="inline-block"
      todoInput.value = "";
    }
    deleteAllBtn.style.display = "none";
  }
});

// Check if there are no more items in the todoList
function checkDeleteAllBtnDisplay() {
  if (todoList.children.length === 0) {
    addBtn.style.display="inline-block"
    saveBtn.style.display="none"
    deleteAllBtn.style.display = "none";
    todoInput.value = "";
  }
}

//Functions
// Code is also saved in functions to understand and use the code in more easy way
///////////////////////////////////////////////////////////////////////////////////

// let saveBtn = document.getElementById("saveBtn");
// let addBtn = document.getElementById("addBtn");
// let inputField = document.getElementById("toDoInput");
// let todoList = document.getElementById("toDoList");
// let deleteAllBtn = document.getElementById("deleteAllBtn");
// deleteAllBtn.style.display = "none";
// let editLi = null;
// saveBtn.style.display = "none";

function addTask() {
  let todoInput = document.getElementById("toDoInput");
  let todoInputValue = todoInput.value;

  if (todoInputValue.trim()) {
    let createLi = document.createElement("li");
    createLi.className = "listCreated";
    createLi.innerText = todoInputValue;

    let editBtn = createButton("Edit", "btn btn-outline-primary", editTask);
    let deleteBtn = createButton("Delete", "btn btn-outline-danger", deleteTask);

    createLi.appendChild(editBtn);
    createLi.appendChild(deleteBtn);

    todoList.appendChild(createLi);
    deleteAllBtn.style.display = "inline-block";

    todoInput.value = "";
  } else {
    alert("Please Input To Do");
  }
}

function createButton(text, className, clickHandler) {
  let button = document.createElement("button");
  button.innerText = text;
  button.className = className;
  button.addEventListener("click", clickHandler);
  return button;
}

function deleteTask() {
  let listItem = this.parentNode;
  listItem.remove();

  if (todoList.children.length === 0) {
    deleteAllBtn.style.display = "none";
  }
}

// function editTask() {
//   let listItem = this.parentNode;
//   let editText = listItem.childNodes[0].nodeValue;
//   inputField.value = editText;
//   saveBtn.style.display = "inline-block";
//   addBtn.style.display = "none";
//   editLi = listItem;
// }

// function saveTask() {
//   if (inputField.value.trim() === "") {
//     alert("Please fill input first");
//   } else {
//     saveBtn.style.display = "none";
//     addBtn.style.display = "inline-block";
//     let textNode = editLi.childNodes[0];
//     textNode.nodeValue = inputField.value;
//     inputField.value = "";
//   }
// }

// function deleteAllTasks() {
//   let confirmText = "Do you want to delete all the to-dos";
//   if (confirm(confirmText)) {
//     if (todoList.children.length > 0) {
//       todoList.innerHTML = "";
//     }
//     deleteAllBtn.style.display = "none";
//   }
// }

// addBtn.addEventListener("click", addTask);
// saveBtn.addEventListener("click", saveTask);
// deleteAllBtn.addEventListener("click", deleteAllTasks);




/////////////////////////////////////////////////////////////

//add List item with edit and delete buttons
addBtn.addEventListener("click", function () {
  let todoInput = document.getElementById("toDoInput");
  let todoInputValue = todoInput.value;

  //check the input should not be empty
  if (todoInputValue.trim()) {
    //crate a list, assign class name to list and set input value into the List
    let createLi = document.createElement("li");
    createLi.className = "listCreated";
    createLi.innerText = todoInputValue;

    //create an edit button assign a class name matching with bootstrap
    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-outline-primary";
    editBtn.innerText = "Edit";
    createLi.appendChild(editBtn);

    //create an delet button assign a class name matching with bootstrap
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-outline-danger";
    createLi.appendChild(deleteBtn);

    todoList.appendChild(createLi);
    deleteAllBtn.style.display = "inline-block";

    //on pressing delete button remove the list
    deleteBtn.addEventListener("click", function () {
      createLi.remove();
      checkDeleteAllBtnDisplay();
    });

    //on pressing edit button set list value in input so user can edit it
    // replace add button with save button
    editBtn.addEventListener("click", function () {
      let editText = createLi.childNodes[0].nodeValue;
      todoInput.value = editText;
      saveBtn.style.display = "inline-block";
      addBtn.style.display = " none";
      editLi = createLi;
    });
  } else {
    alert("Please Input To Do");
  }

  const addDataInFirestore = async () => {
    const inputVal = todoInput.value;
    const timestamp = new Date().getTime();
    const payload = {
      id: timestamp,
      todo: inputVal,
    };
    try {
      const docRef = await addDoc(collection(db, "todos"), payload);
      console.log("Document written with ID: ", docRef);
      todoInput.value = "";
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  addDataInFirestore();

  todoInput.value = "";
});

// on pressing save button update the list with the updated input value from user
//replace save button with add button
saveBtn.addEventListener("click", function () {
  if (todoInput.value.trim() === "") {
    alert("Please fill input first");
  } else {
    saveBtn.style.display = "none";
    addBtn.style.display = "inline-block";
    let textNode = editLi.childNodes[0];
    textNode.nodeValue = todoInput.value;
    todoInput.value = ""; 
  }
});

//on pressing delete all button show a confirmation box whether to delete all list created or not
deleteAllBtn.addEventListener("click", function () {
  let confirmText = "Do you want to delete all the to do's";
  if (confirm(confirmText) == true) {
    if (todoList.children.length > 0) {
      todoList.innerHTML = null;
      saveBtn.style.display = "none";
      addBtn.style.display = "inline-block";
      todoInput.value = "";
    }
    deleteAllBtn.style.display = "none";
  }
});

// Check if there are no more items in the todoList
function checkDeleteAllBtnDisplay() {
  if (todoList.children.length === 0) {
    addBtn.style.display = "inline-block";
    saveBtn.style.display = "none";
    deleteAllBtn.style.display = "none";
    todoInput.value = "";
  }
}

const readData = async () => {
  console.log("abd");
  let item = "";
  const q = query(collection(db, "todos"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const todos = [];
    querySnapshot.forEach((doc) => {
      todos.push(doc.data());
    });
    console.log(todos);
    toDoItem = todos
      .map(
        (todoObj) =>
          `<li class="listCreated">${todoObj.todo}<button class="btn btn-outline-primary">Edit</button><button class="btn btn-outline-danger"">Delete</button></li>`
      )
      .join("");

    // let editBtn = createButton("Edit", "btn btn-outline-primary", editTask);
    // let deleteBtn = createButton(
    //   "Delete",
    //   "btn btn-outline-danger",
    //   deleteTask
    // );

    todoList.innerHTML = item;
  });
};

function createButton(text, className, clickHandler) {
  let button = document.createElement("button");
  button.innerText = text;
  button.className = className;
  button.addEventListener("click", clickHandler);
  return button;
}

// let arr = [];
// let item = "";
// const q = query(collection(db, "todos"));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   arr.push(doc.data);
//   console.log(doc.id, " => ", doc.data());
//   item += `<li> ${doc.data().name}</li>`;
// });
// getData.innerHTML=item

// // console.log(item)
// // blogList.innerHTML = item;
// };

readData();

// addBtn.addEventListener("click", addDataInFirestore);
