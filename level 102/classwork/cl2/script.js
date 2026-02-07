// 2)შექმენი სტრინგი სადაც შეინახავ რაიმე სიტყვას, შენი დავალებაა რომ კონსოლში გამოიტანო მხოლოდ ხმოვანი ასოები, გამოიყენე for of ციკლი

let str = "hello"

let vowel = ["a", "e", "i", "o", "u"]

for(let i of str){
    if(vowel.includes(i)){
        console.log(i)
    }
}