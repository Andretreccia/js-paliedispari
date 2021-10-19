// chiedi all utente una parola
let userWord = prompt("inserisci una parola per scoprire se è paindroma")
/* console.log(userWord) */
//verifica se la parola è palindrona
        //per farlo inseriscila in un array e 
//let wordArray = userWord.split("")
//console.log(wordArray)
        //clona l array
//let wordArrayClone = [...wordArray]

    //funzione
//wordArrayClone.reverse()
//console.log(wordArrayClone)
//let userWordInvert = wordArrayClone.join("")
//onsole.log(userWordInvert)

//if (userWord == userWordInvert) {
///console.log("palindroma")
//}
//else {
//console.log("non  è palindroma")
//}

function palindromaFunction(parola1) {
    let parola2 = parola1.split("").reverse().join("");
    //console.log(parola2)

    if (parola1 == parola2)
        console.log("palindromaaaaaaaaa")
    else {
        console.log("non è palondroma")
    }
}

let userWordreverse = palindromaFunction(userWord);




