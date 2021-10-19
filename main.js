// chiedi all utente una parola
let userWord = prompt("inserisci una parola per scoprire se è paindroma")
/* console.log(userWord) */
//verifica se la parola è palindrona
        //per farlo inseriscila in un array e 
let wordArray = userWord.split("")
console.log(wordArray)
        //clona l array
let wordArrayClone = [...wordArray]

    //funzione
wordArrayClone.reverse()
console.log(wordArrayClone)
let userWordInvert = wordArrayClone.join("")
console.log(userWordInvert)

if (userWord == userWordInvert) {
    console.log("palindroma")
}
else {
    console.log("non  è palindroma")
}
        //rovescia l ordine dell array clonato
        //confronta i due array. 