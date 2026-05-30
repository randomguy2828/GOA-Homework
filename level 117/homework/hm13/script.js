// შექმენით ფუნქცია createProduct(title, price). ფუნქციის შიგნით შექმენით ახალი ცვლადი discountPrice,
// რომელიც იქნება ფასის ნახევარი. ფუნქციამ Shorthand სინტაქსით უნდა დააბრუნოს ობიექტი
// რომელშიც იქნება სამივე თვისება: title, price და discountPrice

function createProduct(title, price){
    let discountPrice = price / 2   
    return{
        title,
        price,
        discountPrice
    }
}

let product1 = createProduct("Laptop", 2000)
let product2 = createProduct("Phone", 1000)

console.log(product1)
console.log(product2)
