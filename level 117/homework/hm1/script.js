// შექმენით სია სადაც იქნება შენახული 5 ობიექტი პროდუქტების შესახებ. თქვენი დავალებაა რომ ამ პროდუქტების ფასები შეკრიბოთ

let products = [
    { name: "dddd", price: 2 },
    { name: "rame", price: 3 },
    { name: "elix", price: 5 },
    { name: "mzaravs", price: 4 },
    { name: "damatenda", price: 6 }
]

let func = products.reduce((a, b) =>{
    return a + b.price
},0)

console.log(func)

