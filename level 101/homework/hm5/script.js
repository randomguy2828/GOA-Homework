// შექმენით სია სადაც შეინახავთ მინიმუმ 5 ობიექტს და სცადეთ გამოიტანოთ თითოეული ობიექტში მყოფი სახელი  ცალცალკე for loop-ის გამოყენებით

// ობიექტების სია
let classmates = [
    {name: "Tengo",age: 16},
    {name: "Erekle", age: 16},
    {name: "Soso", age: 16},
    {name: "Qeti", age: 17},
    {name: "Natali", age: 16}
]

for(let i = 0; i < classmates.length; i++){
    console.log(classmates[i].name)
}