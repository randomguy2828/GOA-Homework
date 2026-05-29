// შექმენით ცვლადი სადაც შეინახავთ რიცხვს. თქვენი მიზანია ეს რიცხვი შეაბრუნოთ და ისე დააბრუნოთ შედეგი.

let num = 12345
let str = String(num)
let rev = ''

for(let i = str.length - 1; i >= 0; i--){
    rev = rev + str[i]
}
let result = Number(rev)
console.log(result)
