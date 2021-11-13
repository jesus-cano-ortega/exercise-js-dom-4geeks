const container = document.getElementById("container");
const input = document.getElementById("input");
const deleteInput = document.getElementById("deleteInput");

document
  .querySelector("#myForm")
  .addEventListener("submit", ev => ev.preventDefault());

//Create a function that removes from the DOM the column that corresponds to the index entered in deleteInput
deleteInput.addEventListener("keyup", event => {
  if (event.keyCode === 13) {
    let inputValue = deleteInput.value;

    if (isNaN(inputValue) || inputValue < 0)
      console.error("Wrong type of value");
    else {
      //If the length of the array is greater than 0 and the value does not exceed the length, we remove the column
      container.childNodes.length > 0 &&
      inputValue < container.childNodes.length
        ? container.removeChild(container.childNodes[inputValue])
        : console.error("Array limit exceeded");
    }
  }
});

//Create a function that creates new div with random size title Hn
document.getElementById("button").addEventListener("click", () => {
  let div = document.createElement("div");

  let value = Math.floor(Math.random() * 6) + 1;

  div.innerHTML = `<h${value}>${input.value.toUpperCase()}</h${value}>`;
  container.appendChild(div);
});

//Create a function that removes the last node without giving error
document.getElementById("deleteButton").addEventListener("click", () => {
  if (container.childNodes.length > 0) {
    container.removeChild(container.lastChild);
  } else {
    console.log("There is no item to delete");
  }
});

//Create a function that applies styles to all columns varying the event
input.addEventListener("keyup", event => {
  if (event.keyCode == 13) {
    let arrayChild = container.childNodes;

    arrayChild.forEach(value => {
      value.innerHTML = `<h1>${input.value.toUpperCase()}</h1>`;
    });
  }
});
