//* DEĞİŞKENLER:
//*-------------------------

let randomNumber

const input = document.querySelector('.input')

const buton = document.querySelector('.input-con button');

const result = document.querySelector('.result')

const imgCon = document.querySelector('.img-con')

const startGame = document.querySelector('.btn-con button')

const liveElement = document.querySelector('#live')

const inputCon = document.querySelector('.input-con')

const butonCon = document.querySelector('.btn-con')

const restartGame = document.querySelector('.restart')

let live = 6






//* START MODE:
//*---------------------------

startGame.addEventListener('click', () => {
    randomNumber = Math.ceil(Math.random() * 100)   //  1-100 araasında sayı tut:
    liveElement.innerText = live
    document.querySelector('.btn-con').style.display = 'none'
    document.querySelector('.input-con').style.display = 'flex'
    document.querySelector('.live-con').style.display = 'flex'
    result.innerText = 'Write the number!'
    input.focus()

    console.log(randomNumber);
})



//* RESTART MODE
//*--------------------------
restartGame.addEventListener('click', () => {
    let randomNumber
    randomNumber = Math.ceil(Math.random() * 100)
    let live = 6
    liveElement.innerText = live
    live--
    imgCon.style.backgroundImage = 'url("./img/numbers.png")'
    butonCon.style.display = 'none'
    inputCon.style.display = 'flex'
    input.value = ''
    input.focus()
    result.innerText = 'Write the number!'
})



//* GAME MODE:
//*---------------------------

buton.addEventListener('click', () => {
    console.log(+input.value);

    live--

    liveElement.innerText = live

    console.log("Can:". live);

    //kazanma durumu:
    if(+input.value === randomNumber){
        console.log("Bildiniz.");
        result.innerText = 'Congratilations!'
        imgCon.style.backgroundImage = 'url("./img/win.gif")'
        input.focus()
        inputCon.style.display = 'none'
        butonCon.style.display = 'flex'
        restartGame.style.display = 'block'
        startGame.style.display = 'none'
    }

    //tahmin edilen sayı küçükse:
    if(+input.value < randomNumber) {
        console.log("Arttır.");
        result.innerText = 'Increase the number!'
        imgCon.style.backgroundImage = 'url("./img/up.gif")'
        input.focus()
        input.value = ''
    }

    //tahmin edilen sayı büyükse:
    if(+input.value > randomNumber){
        console.log("Azalt.");
        result.innerText = 'Reduce the number!'
        imgCon.style.backgroundImage = 'url("./img/down.gif")'
        input.focus()
        input.value = ''
    }

    //can bitince:
    if (live == 0){
        console.log("Kaybettin.");
        result.innerText = 'Game Over!'
        imgCon.style.backgroundImage = 'url("./img/game-over.gif")'
        input.focus()
        inputCon.style.display = 'none'
        butonCon.style.display = 'flex'
        restartGame.style.display = 'block'
        startGame.style.display = 'none'
    }
})


document.addEventListener('keydown', (el) => {
    if(el.key == 'Enter'){
        buton.click()
    }
})

