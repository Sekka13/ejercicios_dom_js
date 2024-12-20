// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv= document.createElement("div")
const cuerpo = document.querySelector("body")
cuerpo.appendChild(newDiv)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let divP = document.createElement("div")
let parr = document.createElement("p")
parr.textContent = "Párrafo del ej 2"
divP.appendChild(parr)
document.body.appendChild(divP)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.
let div6P =  document.createElement("div")

for(i=0; i<6; i++){
    let Pdiv = document.createElement("p")
    Pdiv.textContent=`Párrafo ${i+1}`
    div6P.appendChild(Pdiv)
}

document.body.appendChild(div6P)
// 2.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.
let dinamicP = document.createElement("p")
dinamicP.textContent = "Soy dinámico!"
document.body.appendChild(dinamicP)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let title2 = document.querySelector("h2.fn-insert-here")
title2.textContent= 'Wubba Lubba dub dub'

// 2.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let lista = document.createElement("ul")

for(app of apps){
    let li = document.createElement("li")
    li.textContent= app;
    lista.appendChild(li)
}
document.body.appendChild(lista)

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let eliminarElementos = document.querySelectorAll(".fn-remove-me");
for(elemento of eliminarElementos){
    elemento.remove()
}
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
// let pMedio= document.createElement("p")
// pMedio.textContent="Voy en medio!"
let firstDiv= document.querySelector("div")
firstDiv.insertAdjacentHTML("afterend","<p>Voy en medio!</p>")

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

let divInsert= document.querySelectorAll("div.fn-insert-here")

for(const divs of divInsert){

    let insertP = document.createElement("p")
insertP.textContent="Voy dentro!"
divs.appendChild(insertP)
}



