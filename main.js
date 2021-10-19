
/* l utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5)per il computer (usando una funzione)
Sommiamo i idue numeri e stabiliamo se a somma dei due numeri è pari o dispari
(usando una funzione) Dichiariamo chi ha vinto*/




/* //chiedi di scegliere pari o dispari
let flag = 0
let userPariDispari = prompt("scegli uno tra pari o dispari")
if (userPariDispari == "pari") {
    flag = 1
}
console.log(flag)

//chiedi all utente un numero da 1 a 5
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"))
//console.log(userNumber) */

function randomNumberFunction(da, a) {
    return Math.floor(Math.random() * a) + da;
}

let pcNumber = randomNumberFunction(1, 5);
console.log(pcNumber)