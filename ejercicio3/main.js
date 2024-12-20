// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const lista = document.createElement("ul");
document.body.appendChild(lista);
for (const country of countries) {
  let li = document.createElement("li");
  li.textContent = country;
  lista.appendChild(li);
}
// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementoBorrar = document.querySelector(".fn-remove-me");
elementoBorrar.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const lisCars = document.createElement("ul");
const divPrinthere = document.querySelector("div[data-function=printHere]");
divPrinthere.appendChild(lisCars);

for (const car of cars) {
  lis = document.createElement("li");
  lis.textContent = car;
  lisCars.appendChild(lis);
}

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const country of countries2) {
  divCountry = document.createElement("div");
  divCountry.className = "divCountry";
  document.body.appendChild(divCountry);

  h4 = document.createElement("h4");
  h4.textContent = country.title;
  divCountry.appendChild(h4);

  img = document.createElement("img");
  img.src = country.imgUrl;
  divCountry.appendChild(img);
}
// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const btnBorrarDiv = document.createElement("button");
btnBorrarDiv.innerHTML = "Borrar último Div";
document
  .querySelectorAll("ul")[1]
  .insertAdjacentElement("afterend", btnBorrarDiv);

btnBorrarDiv.addEventListener("click", () => {
  index = document.querySelectorAll(".divCountry").length - 1;
  document.querySelectorAll(".divCountry")[index].remove();
});

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.
const divs = document.querySelectorAll(".divCountry");

for (const div of divs) {
  const btnBorrarEsteDiv = document.createElement("button");
  btnBorrarEsteDiv.innerHTML = "Borrar este div";
  div.appendChild(btnBorrarEsteDiv);

  btnBorrarEsteDiv.addEventListener("click", () => {
    div.remove();
  });
}
