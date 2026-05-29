// for loop - ის გამოყენებით 50-მდე ყველა ლუწი რიცხვი შეკრიბეთ და გადაამრავლეთ კენტების ჯამზე.

let even = 0
let odd = 0

for(let i = 1; i <= 50; i++){
    if(i % 2 === 0){
        even = even + i
    }
    else{
        odd = odd + i
    }
}

let result = even * odd
console.log(result)
