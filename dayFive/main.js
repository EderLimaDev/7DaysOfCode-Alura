//Arrays de items da lista

let laticinios = [];
let frutas = [];
let congelados = [];
let doces = [];

//Buscar Elementos no HTML

const listaCarrinho = document.getElementById("lista-carrinho");
const userInput = document.getElementById("item");
const addCartBtn = document.querySelector(".addCart");
const btnConfirm = document.querySelector(".btn-confirm");
const btnNotConfirm = document.querySelector(".btn-not-confirm");
const popUp = document.querySelector(".popUp");
const list = document.getElementById("list");
const btnShowList = document.querySelector(".btn-show-list");
const actualList = document.querySelector(".lista-atual");
const componentItemRemove = document.querySelector(".remove-item-show");
const btnRemove = document.querySelector(".btn-remove");
const itemToRemove = document.getElementById("item-remove");

componentItemRemove.classList.add("hide");

//Adicionar item às listas

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

//Confirmar e esconder janela

btnConfirm.addEventListener("click", () => {
  popUp.classList.add("hide");

  actualList.innerHTML = ''
  componentItemRemove.classList.add("hide");
});

//Finalizar e apresentar lista

btnNotConfirm.addEventListener("click", () => {
  popUp.classList.add("hide");

  list.innerHTML += `
    <li><strong>Laticinios: </strong> ${laticinios.join(" , ")}</li>
    <li><strong>Frutas: </strong> ${frutas.join(" , ")}</li>
    <li><strong>Congelados: </strong> ${congelados.join(" , ")}</li>
    <li><strong>Doces: </strong> ${doces.join(" , ")}</li>
    `;

    userInput.disabled = 'true';
    addCartBtn.setAttribute('disabled', 'true')
});


//Mostra as listas de items

btnShowList.addEventListener("click", () => {
  adicionarListas()
});



//Função para remover item da lista, verifica se contem o item, encontra o indice, remove e atualiza a lista.

function removerItem() {
  let item = itemToRemove.value;

  if (frutas.includes(item)) {
    let indice = item.indexOf(frutas);
    frutas.splice(indice);
    actualList.innerHTML = ''
    adicionarListas()

  } else if (laticinios.includes(item)) {
    let indice = item.indexOf(laticinios);
    laticinios.splice(indice);
    actualList.innerHTML = ''
    adicionarListas()
    
  } else if (congelados.includes(item)) {
    let indice = item.indexOf(congelados);
    congelados.splice(indice);
    actualList.innerHTML = ''
    adicionarListas()
    
  } else if (doces.includes(item)) {
    let indice = item.indexOf(doces);
    doces.splice(indice);
    actualList.innerHTML = ''
    adicionarListas()
    
  } else {
    alert('Item não encontrado')
  }
}


// função para inserir as listas de itens no HTML
function adicionarListas() {
  if (
    laticinios.length !== 0 ||
    frutas.length !== 0 ||
    congelados.length !== 0 ||
    doces.length !== 0
  ) {
    componentItemRemove.classList.remove("hide");
    actualList.innerHTML += `
      <li><strong>Laticinios: </strong>${laticinios.join(" , ")}</li>
      <li><strong>Frutas: </strong>${frutas.join(" , ")}</li>
      <li><strong>Congelados: </strong>${congelados.join(" , ")}</li>
      <li><strong>Doces: </strong>${doces.join(" , ")}</li>
      `;
  } else {
    alert("Ainda não foi adicionado nenhum item na lista!");
  }
}



