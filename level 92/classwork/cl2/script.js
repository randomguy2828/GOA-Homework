// შევქნათ სია სადაც მოვათავსებთ სახელებს და ამ სიიდან რომელი სახელიც იწყება ასო გ და მთავრდება ასო ა ასეთი ელემენტები გადავყაროთ ახალ სიაში

let list = ["gia", "anxsandre", "giorga", "dato", "saba"]
let list1 = []
for(let i = 0; i < list.length; i++){
    if(list[i][0] == "g" && list[i][list[i].length - 1] == "a"){
        list1.unshift(list[i])
    }
}
console.log(list1)