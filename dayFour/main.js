const headMessage = document.getElementById('head-message');
const btnTry = document.querySelector('.btn-try');
const playerNumber = document.getElementById('player-number');
const resultMessage = document.getElementById('result-message');
const playAgain = document.querySelector('.play-again')

const name = prompt('Qual seu nome ?')

headMessage.innerHTML += `<h1>Olá ${name} vamos jogar?</h1>` 

const randomNumber = Math.floor(Math.random() * 11);

let count = 0;


btnTry.addEventListener('click', () => {
    count++;
    let value = playerNumber.value

    if(value == randomNumber && count <= 2) {
        alert('Paranbéns, Você acertou!')
        playerNumber.disabled = 'true'
        btnTry.setAttribute('disabled', 'true')
        playAgain.classList.remove('hide')

    } else if (value !== randomNumber && count <= 2) {
        alert('Ops, Tente Novamente')  
       
    } else {
        alert('Infelizmente Não foi dessa vez!')
        playerNumber.disabled = 'true'
        btnTry.setAttribute('disabled', 'true')
        resultMessage.innerHTML = `<h4>A resposta correta era!</h4><p>${randomNumber}</p>`
        playAgain.classList.remove('hide')
    }



})

function reloadScreen() {
    return window.location.reload()
}

