


let operador = null;

let resultado = null;


alert('Olá vamos calcular ?')

let selecionarOperador = prompt('Qual será o operador?<br> 1 - Soma, 2 - Subtração, 3 - multiplicação, 4 - divisão')

switch(selecionarOperador) {
    case '1': 
        operador = somar
    break;
    case '2': 
        operador = subtrair
    break;
    case '3': 
        operador = multiplicar
    break;
    case '4': 
        operador = dividir
    break;
}


let valor1 = prompt('Qual Será o primeiro valor ?');
let valor2 = prompt('Qual será o segundo valor ?');

resultado = calculo(Number(valor1), operador, Number(valor2))

alert(`O Resultado é  ${resultado}`)
alert("Até a próxima!")




console.log(selecionarOperador, operador);


//função de cálculo
function calculo(valor1, operadorSelecionado, valor2) {
    return operadorSelecionado(valor1, valor2)
}


//funcões para operadores

function somar(valor1, valor2) {
    return valor1 + valor2
}
function subtrair(valor1, valor2) {
    return valor1 - valor2
}
function multiplicar(valor1, valor2) {
    return valor1 * valor2
}
function dividir(valor1, valor2) {
    return valor1 / valor2
}