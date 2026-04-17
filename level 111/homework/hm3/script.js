// შექმენით სია სადაც იქნება bool ტიპის (true, false) მნიშვნელობები. და დააბრუნეთ თუ ამ სიაში ყველა არის true თუ არა.

let list = [true, true, false, true]
let True = true

for(let i = 0; i < list.length; i++){
    if(list[i] === false){
        True = false
    }
}

console.log(True)

