// დაწერე ფუნქცია, რომელიც იღებს id, name და price პარამეტრებს და აბრუნებს ობიექტს

function product(id, name, price){
    return{
        id,
        name,
        price
    }
}


let apple = product(134, "sprite", "2$")
let banana = product(135, "brusqets", "3$")

console.log(apple)  
console.log(banana) 
