// შექმენით რიცხვებით სავსე სია, თქვენი მიზანია იპოვოთ მაქსიმალური რიცხვი ამ სიაში (max)

let numbers = [354,678,232,67,224,678,789,256,427]

let maxnum = numbers[0]
for(let i = 1; i < numbers.length; i++){
    if(numbers[0] > maxnum){
        maxnum = numbers[i]
    }
}

console.log(maxnum)