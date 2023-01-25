//* DEĞİŞKENLER:
//*-------------------------
const input = document.querySelector('.input')
const buton = document.querySelector('.input-con button');
let live = 6

    console.log(+input.value);





//  1-100 araasında sayı tut:
let randomNumber = Math.ceil(Math.random() * 100)
    console.log(randomNumber);




    
buton.addEventListener('click', () => {
    console.log(+input.value);

    live--

    //kazanma durumu:
    if(+input.value === randomNumber){
        console.log("Bildiniz.");
    }

    //tahmin edilen sayı küçükse:
    if(+input.value < randomNumber) {
        console.log("Arttır.");
    }

    //tahmin edilen sayı büyükse:
    if(+input.value > randomNumber){
        console.log("Azalt.");
    }

    //can bitince:
    if (live == 0){
        console.log("Kaybettin.");
    }
})