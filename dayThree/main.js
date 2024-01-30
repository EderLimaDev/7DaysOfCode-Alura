//Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

//1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

//2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

//3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

//4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

//O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

//Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.

// DICA
// Já deu pra ter uma ideia de como fazer toda essa historinha acontecer, né? Principalmente lembrando como utilizar as estruturas condicionais e loops em Javascript!

// Caso você ainda não saiba como imprimir e receber valores nas páginas web com HTML e CSS, você poderá usar console.log, prompt e alert para desenvolver o seu jogo, como você já viu nos últimos dias.

// Lembre-se que você pode sempre personalizar o jogo da forma que quiser.


const myList = document.querySelector('.my-list');

const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const question2Back = document.getElementById('question2-back');
const tecnologies = document.getElementById('tecnologies');

const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');
const answer2B = document.querySelector('.answer2-b');
const answer3 = document.querySelector('.answer3');

const btnQuestion1 = document.querySelector('.btn-question1')
const btnQuestion2 = document.querySelector('.btn-question2');
const btnQuestion3 = document.querySelector('.btn-question3');
const btnQuestion2B = document.querySelector('.btn-question2-b');
const btnTecnology = document.querySelector('.tecnology');
 
const questionTwoFront = document.querySelector('.front-end-question2')
const questionTwoBack = document.querySelector('.back-end-question2')
const questionThree = document.querySelector('.front-and-back')
const questionFour = document.querySelector('.last-question')

const insertTecnologies = document.querySelector('.insert-tecnologies')
const insertTecnologiesBtnYes = document.querySelector('.insert-tecnologies-yes')
const insertTecnologiesBtnNo = document.querySelector('.insert-tecnologies-no')



btnQuestion1.addEventListener('click', () => {
    if(question1.value === '1') {
        answer1.innerHTML += 'Front-End que legal, espero que em breve consiga desenvolver belos sites!'
        questionTwoFront.classList.remove('hide');

        question1.disabled = true;
        btnQuestion1.setAttribute('disabled', 'true');


     } else if (question1.value === '2') {
        answer1.innerHTML += 'Back-End que massa! cuida da saúde mental hein!'
        questionTwoBack.classList.remove('hide');
        
        question1.disabled = true;
        btnQuestion1.setAttribute('disabled', 'true');
    } else {
        alert('Digite um número válido entre 1 e 2')
    }
})


btnQuestion2.addEventListener('click', () => {
    if(question1.value === '1' && question2.value === '1') {
        answer2.innerHTML += 'React é dahora, vamos componentizar o Mundo!'
        questionThree.classList.remove('hide');

        question2.disabled = true;
        btnQuestion2.setAttribute('disabled', 'true');


     } else if (question1.value === '1' && question2.value === '2') {
        answer2.innerHTML += 'Vue é muito bacana e criativo'
        questionThree.classList.remove('hide');
        
        question2.disabled = true;
        btnQuestion2.setAttribute('disabled', 'true');


    } else {
        alert('Digite um número válido entre 1 e 2')
    }


})


btnQuestion2B.addEventListener('click', () => {

    if (question1.value === '2' &&  question2Back.value === '1') {
        answer2B.innerHTML += 'C# vejo que se orienta a Objetos hein'
        questionThree.classList.remove('hide');
        
        question2Back.disabled = true;
        btnQuestion2B.setAttribute('disabled', 'true');

    } else if (question1.value === '2' &&  question2Back.value === '2') {
        answer2B.innerHTML += 'java, vejo que é uma pessoa de classe!'
        questionThree.classList.remove('hide');
        
        question2Back.disabled = true;
        btnQuestion2B.setAttribute('disabled', 'true');
    } else {
        alert('Digite um número válido entre 1 e 2')
    }


})

btnQuestion3.addEventListener('click', () => {
    if(question3.value === '1') {
        answer3.innerHTML += 'É isso aí vai fundo se especializa!'
        questionFour.classList.remove('hide');

        question3.disabled = true;
        btnQuestion3.setAttribute('disabled', 'true');


     } else if (question3.value === '2') {
        answer3.innerHTML += 'Há muito trabalho pela frente mas se tornar Full é muito bom!'
        questionFour.classList.remove('hide');

        question3.disabled = true;
        btnQuestion3.setAttribute('disabled', 'true');

     } else {
        alert('Digite um número válido entre 1 e 2')
    }
})

let myTecnologies = [];


btnTecnology.addEventListener('click', () => {
    let value = tecnologies.value
   
    if(value === '') {
        alert('Insira pelo menos 1 valor') 
    } else {
    myTecnologies.push(value)
    
    btnTecnology.setAttribute('disabled', 'true');
    tecnologies.disabled = true;
    insertTecnologies.classList.remove('hide');
   
    }
    

})

insertTecnologiesBtnYes.addEventListener('click', () => {
    tecnologies.value = ' ';
    
    tecnologies.disabled = false;
    btnTecnology.removeAttribute('disabled');
    insertTecnologies.classList.add('hide');
})

insertTecnologiesBtnNo.addEventListener('click', () => {

    myTecnologies.forEach((item) => {
        myList.innerHTML += `<li>${item}</li>`
    })

    myList.classList.remove('hide');
    insertTecnologiesBtnYes.setAttribute('disabled', 'true');
    insertTecnologiesBtnNo.setAttribute('disabled', 'true');

})
