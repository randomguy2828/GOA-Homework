// მომხმარებელს შემოატანინეთ რიცხვი. თუ რიცხვი არის ლუწი მაშინ აიყვანეთ კუბში, სხვა შემთხვევაში კვადრატში. (Math ობიექტი გამოიყენეთ)

let num = Number(prompt())

let result

if(num % 2 === 0){
    result = Math.pow(num, 3)
} 
else{
    result = Math.pow(num, 2)
}

console.log(result)