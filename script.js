const input = document.getElementById("input-box");
const list = document.getElementById("list-container");

function addTask() {
  if (input.value === "") {
    alert("Enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
  }
  input.value = "";
  saveData();
}

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});
function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask()