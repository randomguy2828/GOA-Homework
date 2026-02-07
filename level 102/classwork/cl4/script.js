// 4)
// შექმენით ობიექტი სადაც შეინახავთ რამოდენიმე რიცხვს როგორც კენტს ასევე ლუწს,
// თქვენი დავალებაა რომ იპოვოთ ყველა ლუწი რიცხვის ჯამი და კენტი რიცხვების რაოდენობა

let nums = {
    num1: 45,
    num2: 60,
    num3: 23,
    num4: 50
}

let evensum = 0

let oddcount = 0

for(let num in nums){
    if(nums[num] % 2 === 0){
        evensum += num
    }
    else{
        oddcount++
    }
}

console.log(evensum)
console.log(oddcount)