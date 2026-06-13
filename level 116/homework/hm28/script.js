// მომხმარებელს შემოატანინეთ ტექსტი და გაიგეთ ეს ტექსტი თუ შეიცავს ხმოვნებს.

let user = prompt()
let vowels = "aeiouAEIOU"

let b = false
let i = 0

while(user.length > i){
    if(vowels.includes(user[i])){
        b = true
        break
    }
    i++
}

console.log(b)