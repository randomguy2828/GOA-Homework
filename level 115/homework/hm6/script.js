// დაწერე ფუნქცია, რომელიც იღებს id, name და price პარამეტრებს და აბრუნებს ობიექტს

function product(id, name, price){
    return{
        id,
        name,
        price
    }
}


let i = product(134, "sprite", "2$")
let b = product(135, "brusqets", "3$")

console.log(i)  
console.log(b) 
