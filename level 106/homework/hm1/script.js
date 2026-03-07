// გააკეთეთ მარტივი კალკულატორი switch / case -ების გამოყენებით.

let a = 10;
let b = 5;
let operator = '*'
let result

switch(operator){
    case '+':
        result = a + b
        break
    case '-':
        result = a - b
        break
    case '*':
        result = a * b
        break
    case '/':
        result = a / b
        break
    default:
        console.log("არასწორიa")
}

console.log(result)