
/* l utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5)per il computer (usando una funzione)
Sommiamo i idue numeri e stabiliamo se a somma dei due numeri è pari o dispari
(usando una funzione) Dichiariamo chi ha vinto*/




//chiedi di scegliere pari o dispari

let userPariDispari = prompt("scegli uno tra pari o dispari")
let userEvenOdd = 1
if (userPariDispari == "pari") {
    userEvenOdd = 0
}

//chiedi all utente un numero da 1 a 5
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"))
//console.log(userNumber)

//funzione per creare un numero random
function randomNumberFunction(da, a) {
    return Math.floor(Math.random() * a) + da;
}
//crea un numero random da 1 a 5 per il pc 
let pcNumber = randomNumberFunction(1, 5);
console.log(pcNumber)

//funzione per calcolare la somma e stabiliere se sia pari o dispari 
function somAndEvenOdd(numero1, numero2) {
    let sum = numero1 + numero2

    if (sum % 2 !== 0) {
        return 1
    }
    else {
        return 0
    }
}
//Richiama la funzione 
let resultEvenOdd = somAndEvenOdd(userNumber, pcNumber);
//console.log(risultato)
//seleziona l elemtno entro il quale far apparire il risultato 
const winner = document.querySelector(".winner")
let theWinnerIS = ""
//condzioni per il risultato
if (userEvenOdd == resultEvenOdd) {
    alert("il giocatore vince")
}
else {
    alert("il pc vince")
}
