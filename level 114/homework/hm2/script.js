// შექმენი 5 ცვლადი, სადაც განსხვავებული მონაცემები შეინახება. ჯერ შექმენი ობიექტი shorthand-ით, შემდეგ კი სხვა ხაზზე გამოიყენე დესტრუქცია,
// რომ ამოიღო მხოლოდ სახელის და მეილის მნიშვნელობა.

function func(name, email, age){
    return {name, email, age}
}

let user1 = func("nika", "ran@mail.com", 17)
let user2 = func("ana", "ran@mail.com", 20)
let user3 = func("giorgi", "giorgi@mail.com", 25)
let user4 = func("mariam", "numi@mail.com", 22)
let user5 = func("davit", "imena@mail.com", 30)

let{ name: name1, email: email1 } = user1
let{ name: name2, email: email2 } = user2
let{ name: name3, email: email3 } = user3
let{ name: name4, email: email4 } = user4
let{ name: name5, email: email5 } = user5

console.log(name1, email1)
console.log(name2, email2)
console.log(name3, email3)
console.log(name4, email4)
console.log(name5, email5)
