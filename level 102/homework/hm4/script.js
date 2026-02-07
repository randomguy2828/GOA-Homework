// შექმენით ობიექტი სადაც შეინახავთ თქვენი საყვარელი ფილმის / წიგნის მონაცემებს. და კონსოლში გამოიტანეთ სათითაოდ ჯერ key და შემდეგ value.

let serial = {
    title: "flash",
    seasons: 7,
    genre: "action"
}

keys = Object.keys(serial)
values = Object.values(serial)

console.log(keys)
console.log(values)