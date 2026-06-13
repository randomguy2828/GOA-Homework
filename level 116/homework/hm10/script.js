// შექმენით ფუნქცია რომელიც არგუმენტად გადაცემული სიიდან დააბრუნებს ყველაზე ხშირად რომელი რიცხვიც მეორდება იმას.

function func(arr){
    let max = 0
    let num
    
    for(let i = 0; i < arr.length; i++){
        let count = 0
        for(let j = 0; j < arr.length; j++){
            if (arr[i] === arr[j]){
                count++
            }
        }
        if(count > max){
            max = count
            num = arr[i]
        }
    }
    return num
}

let list = [3, 2, 7, 5, 8, 4, 2, 2]
console.log(func(list))
