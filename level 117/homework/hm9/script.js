// შექმენით სია სადაც გექნებათ სტრინგები. დააბრუნეთ ისეთი ელემენტის ინდექსი რომლის სიგრძეც მეტია 7-ზე.,

let list = ["omniscent", "mwvadi", "soko", "lama", "kata"]

let func = list.findIndex((word) => {
    return word.length > 7
})

console.log(func)

