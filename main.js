// chiedi all utente una parola
let userWord = prompt("inserisci una parola per scoprire se è paindroma")
//con una funzione verifica che sia palinfroma
function palindromaFunction(parola1) {
    let parola2 = parola1.split("").reverse().join("");

    if (parola1 == parola2)
        alert("La parola è palindroma")
    else {
        alert("La parola non è palondroma")
    }
}
let userWordreverse = palindromaFunction(userWord);




