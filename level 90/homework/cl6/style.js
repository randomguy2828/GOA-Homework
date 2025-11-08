// მომხმარებელს შემოატანინეთ ტექსტი და გაიგეთ ეს ტექსტი არის თუ არა პალინდრომე (for loop-ის გამოყენებით).

let name = prompt()
let reversed = ""

for(let i = name.length - 1; i >= 0; i -= 1){
    reversed += name[i]
}

if(reversed === name){
    console.log("True")
}
else{
    console.log("false")
}
