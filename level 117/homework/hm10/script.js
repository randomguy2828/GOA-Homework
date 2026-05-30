// შექმენით Factory ფუნქცია createBook(title, author, price), რომელიც დააბრუნებს ობიექტს ამ თვისებებით.
// ობიექტს შიგნითვე უნდა ჰქონდეს მეთოდი getInfo(), რომელიც კონსოლში დაბეჭდავს ტექსტს: "წიგნი: [title], ავტორი: [author], ფასი: [price] ლარი".

function createBook(title, author, price){
    return {
        title: title,
        author: author,
        price: price,
        getInfo: function(){
            console.log("წიგნი: " +  this.title + " ავტორი" + this.author + " ფასი" +  this.price + " ლარი")
        }
    }
}

let book1 = createBook("magari wigni", "giorgi", 17)
let book2 = createBook("magari exstenstion", "tengo", 16)

book1.getInfo()
book2.getInfo()

