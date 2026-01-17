// მომხმარებელს შემოატანინეთ რიცხვი. და ამ რიცხვის გამყოფები გამოიტანეთ სიის სახით.

let number = Number(prompt("შეიყვანეთ რიცხვი"))

let divisor = []

for(let i = 1; i <= number; i++){
    if(number % i === 0){
        divisor.push(i)
    }
}

console.log(divisor);