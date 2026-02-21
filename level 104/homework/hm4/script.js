// შექმენით ფუნქცია, რომელიც რენდომულად აარჩევს რიცხვს 1-დან 10-მდე. და მომხმარებელმა უნდა გამოიცნოს ეს რიცხვი. ამისთვის მას უნდა ჰქონდეს 3 ცდა.

function guessnum() {
    let randomnum = Math.floor(Math.random() * 10) + 1
    for(let i = 3; i > 0; i--){
        let guess = Number(Prompt(i))
        if(guess = randomnum){
            return "სწორია"
        }
        else{
            return "ვერ გამოიცანი"
        }
    }
}