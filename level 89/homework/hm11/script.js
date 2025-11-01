// 11)შექმენი ცვლადის სადაც შეინახავ სტრინგს --> "სადგური"

// შენი დავალებაა რომ ინდექსების გამოყენებით ასევე while და for ციკლის გამოყენებით ტერმინალში გამოიტანო თითოეული ასო

let name = "სადგური"

console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
console.log(name[5])
console.log(name[6])


for(let i = 0;i < 7;i++){
    console.log(name[i])
}

a = 0

while(a < 7){
    console.log(name[a])
    a++
}