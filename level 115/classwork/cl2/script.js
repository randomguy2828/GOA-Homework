// 2)შექმენი ობიექტი შენს შესახხებ --> name , surname , age

// შექმენი მეორე ობიექტი სადაცვ იქნება --> adress , hobby , favColor

// შენი დავალებაა გააერთიანო ეს ორივე ობიექტი ერთ ობიექტში და შეინახო ცვლადში'

// შემდეგ მოახდინე ამ ობიექტის დესტრუქცია და გამოიტანე კონსოლში თითოეული მათგანი

let me ={
    name: "giorgi",
    surname: "pavliashvili",
    age: 17
}

let random ={
    adress: "pataridzis rame",
    hobby: "coding",
    favColor: "red"
}

let all = Object.assign(me, random)

let{name, surname, age, adress, hobby, favColor} = all

console.log(name)
console.log(surname)
console.log(age)
console.log(adress)
console.log(hobby)
console.log(favColor)
