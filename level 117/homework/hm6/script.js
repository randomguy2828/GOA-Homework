// შექმენით სია სადაც გექნებათ იუზერების ობიექტები (id, name, age). find()-ის გამოყენებით იპოვეთ ის მომხმარებელი, რომლის id იქნება 3-ის ტოლი და დააბრუნეთ ეს ობიექტი.

let users = [
    {id: 1, name: "nika", age: 17},
    {id: 2, name: "erekle", age: 18},
    {id: 3, name: "giorgi", age: 19},
    {id: 4, name: "davita", age: 20},
    {id: 5, name: "irakli", age: 21}
]

let func = users.find((user) => {
    return user.id === 3
})

console.log(func)
