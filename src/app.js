const container = document.getElementById("container");
const input = document.getElementById("input");
const deleteInput = document.getElementById("deleteInput");

document
  .querySelector("#myForm")
  .addEventListener("submit", ev => ev.preventDefault());

//Crear una funcion que elimine del DOM la columna que corresponda con el indice introducido en deleteInput
deleteInput.addEventListener("keyup", event => {
  if (event.keyCode === 13) {
    let inputValue = deleteInput.value;

    //Si el valor introducido no es un número o es inferior a 0 (negativo), devolvemos error
    if (isNaN(inputValue) || inputValue < 0)
      console.error("Tipo de valor introducido erróneo");
    else {
      //Si la longitud del array es mayor a 0 y el valor no excede la longitud, eliminamos la columna
      container.childNodes.length > 0 &&
      inputValue < container.childNodes.length
        ? container.removeChild(container.childNodes[inputValue])
        : console.error("Límite del array excedido");
    }
  }
});

//Crear función que cree un nuevo div con un título de tamaño aleatorio Hn
document.getElementById("button").addEventListener("click", () => {
  let div = document.createElement("div");
  //div.setAttribute("class", "col"); --> en caso de querer aplicar clases

  let value = Math.floor(Math.random() * 6) + 1;

  //Creamos el div en mayúscula con un valor de título aleatorio mediante Math.floor
  div.innerHTML = `<h${value}>${input.value.toUpperCase()}</h${value}>`;
  container.appendChild(div);
});

//Crear función que elimine el último nodo sin dar error
document.getElementById("deleteButton").addEventListener("click", () => {
  //Comprobamos si la longitud del array es superior a 0
  if (container.childNodes.length > 0) {
    //En caso afirmativo, eliminamos el último nodo
    container.removeChild(container.lastChild);
  } else {
    //En caso contrario, pasamos un mensaje por consola
    console.log("No hay ningún elemento a eliminar");
  }
});

//Crear función que aplique estilos a todas las columnas, variando así el evento
input.addEventListener("keyup", event => {
  if (event.keyCode == 13) {
    //console.log(container.childNodes);
    let arrayChild = container.childNodes;

    arrayChild.forEach(value => {
      value.innerHTML = `<h1>${input.value.toUpperCase()}</h1>`;
    });
  }
});
