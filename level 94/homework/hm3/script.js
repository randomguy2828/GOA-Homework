// შექმენით ფუნქცია, რომელსაც გადაეცემა არგუმენტად სია.
//  ამ სიაში უნდა იყოს მინიმუმ 5 რიცხვი. ფუნქციამ უნდა დააბრუნოს ამ სიაში მყოფი რიცხვების ჯამი.

function List(num){
    let sum = 0
    for(let i = 0; i < num.length; i++){
        sum += num[i]
    }
    return sum
}

num = [5, 7, 4, 3, 1]

console.log(List(num)) 