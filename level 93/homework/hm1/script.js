// მოცემული გაქვთ სია:  [100, 50, 0, -300, 150, 20, 40, 900] და გამოიტანეთ ყველაზე პატარა რიცხვი. (მთლიანი სია შეამოწმეთ და ისე, ხელით არ ამოარჩიოთ).

let list = [100, 50, 0, -300, 150, 20, 40, 900]

let minNum = list[0]

for(let i = 1; i < list.length; i++){
    if (list[i] < minNum){
        minNum = list[i]
    }
}

console.log(minNum)