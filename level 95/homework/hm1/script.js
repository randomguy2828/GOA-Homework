// შექმენით ფუნქცია რომელიც შეამოწმებს არგუმენტად გადაცემული მნიშვნელიბა არის თუ არა პალინდრომე.

function Palind(word){
    for(let i = 0; i < word.length; i++){
        let left = word[i]
        let right = word[word.length - 1 - i]
        
        if(left !== right){
            return false
        }
    }
    return true
}

console.log(Palind("lili"))