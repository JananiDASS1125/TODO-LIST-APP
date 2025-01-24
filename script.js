var ul = document.getElementById("list-container");
var input = document.getElementById("input");

function add() {
  // Check if input is not empty
  if (input.value.trim() !== "") {
    var listitem = document.createElement("li");
    listitem.innerHTML =
      input.value + "<button onclick='deleteitem(event)'>Delete</button>";
    ul.appendChild(listitem);
    input.value = ""; // Clear input field after adding
  }
}

function deleteitem(event) {
  event.target.parentElement.remove();
}

