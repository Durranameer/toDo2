const textFeild = document.getElementById("text");
const taskList = document.getElementById("list");

function addTask() {
  if (textFeild.value == "") {
    alert("you have to write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = textFeild.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.classList.add("delete")
    span.innerHTML = "x";
    li.appendChild(span);
  }
  textFeild.value = ""; //to empty the text feild
}
taskList.addEventListener("click", function (e) {
  //the e is an object conatining info about the event
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});

// document.getElementsByClassName('delete').forEach(element => {
  
// });