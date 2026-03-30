// შექმენით სია სადაც იქნება სტრინგები. დააბრუნეთ თითოეული სტრინგი თავის ინდექსებთან ერთად.

let str = ["apple", "banana", "cherry", "date", "fig"]

let result = str.map(function(item, index){
    return index + item
})

console.log(result)