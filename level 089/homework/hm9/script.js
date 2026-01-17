// 9)შექმენი სია,სადაც მოათავსებთ მხოლოდ რიცხვებს,

// ტერმინალში გამოიტანეთ სიაში მყოფი მხოლოდ კენტი რიცხვები (შეასრულეთ ორივეთი for და while)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0; i < 10; i++){
    if (numbers[i] % 2 === 1) {
        console.log(numbers[i])
    }
}

let a = 0

while(a < 10){
    if (numbers[a] % 2 === 1) {
        console.log(numbers[a])
    }
    a++
}