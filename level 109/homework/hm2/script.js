// შექმენით ცვლადი სადაც შეინახავთ რენდომ რიცხვს 1-დან 20-მდე. მომხმარებელმა კი უნდა გამოიცნოს ეს რიცხვი.

let randomnum = Math.floor(Math.random() * 20) + 1

do{
    let guess = Number(prompt())
    if(guess > randomnum){
        alert("არასწორია")
    }
    else if(guess < randomnum){
        alert("არასწორია")
    }
    else{
        alert("სწორია")
    }

} while (guess !== randomnum)

