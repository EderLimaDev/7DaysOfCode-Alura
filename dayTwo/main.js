//Ele deve pedir para o usuário responder 3 perguntas:

// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?
// À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.
// No final, o sistema vai exibir a mensagem: "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

// Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.

// EXERCÍCIO OPCIONAL

// Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.
// Mas ele é 100% opcional.
// Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:
// Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.
// E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

// 1 > Muito bom! Continue estudando e você terá muito sucesso.
// 2 > Ahh que pena... Já tentou aprender outras linguagens?

const message = document.getElementById('message');
const secondMessage = document.getElementById('second-message');


let name = prompt('Qual o seu nome?')
let age = prompt('Quantos anos você tem?')
let language = prompt('Qual linguagem de programação você está estudando?')


message.innerHTML += `<h1>Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!</h1>`

let lastQuestion = prompt(`Você gosta de estudar ${language}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if(lastQuestion === '1') {
    secondMessage.innerHTML += `<p>Muito bom! Continue estudando e você terá muito sucesso.</p>`
} else if (lastQuestion === '2') {
    secondMessage.innerHTML += `<p>Ahh que pena... Já tentou aprender outras linguagens?</p>`
} else {
    alert('Valor Inserido Inválido');
}