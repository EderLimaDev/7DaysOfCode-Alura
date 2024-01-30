let laticinios = [];
let frutas = [];
let congelados = [];
let doces = [];

const listaCarrinho = document.getElementById("lista-carrinho");
const userInput = document.getElementById("item");
const addCartBtn = document.querySelector(".addCart");
const btnConfirm = document.querySelector(".btn-confirm");
const btnNotConfirm = document.querySelector(".btn-not-confirm");
const popUp = document.querySelector(".popUp");
const list = document.getElementById("list");

addCartBtn.addEventListener("click", () => {
  let selected = listaCarrinho.value;

  if (selected === "laticinios") {
    laticinios.push(userInput.value);
  } else if (selected === "frutas") {
    frutas.push(userInput.value);
  } else if (selected === "congelados") {
    congelados.push(userInput.value);
  } else if (selected === "doces") {
    doces.push(userInput.value);
  }

  userInput.value = "";
  popUp.classList.remove("hide");
});

btnConfirm.addEventListener("click", () => {
  popUp.classList.add("hide");
});

btnNotConfirm.addEventListener("click", () => {
  popUp.classList.add("hide");

  list.innerHTML += `
    <li><strong>Laticinios: </strong> ${laticinios.join(" , ")}</li>
    <li><strong>Frutas: </strong> ${frutas.join(" , ")}</li>
    <li><strong>Congelados: </strong> ${congelados.join(" , ")}</li>
    <li><strong>Doces: </strong> ${doces.join(" , ")}</li>
    `;
});

console.log(laticinios, frutas);
