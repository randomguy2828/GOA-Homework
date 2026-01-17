// მომხმარებელს შემოატანინეთ რიცხვი. შემდეგ სიტყვები შემოატანინეთ იმდენჯერ რა რიცხვიც შემოიტანა.
//  შემდეგ ახალ სიაში ჩაამატეთ ყველა შემოტანილი სიტყვა. და გაფილტრეთ. თუ იქნება ისეთი სიტყვები რომლებიც მეორდება (ქეის სენსიტიურობა არ გაითვალისწინოს) ისინი ამოშალოს.,

let num = Number(prompt())
let list = []
let flrt = []

for(let i= 0;i < num;i++){
    let word = prompt().toLowerCase()
    list.push(word)
}
for(let i = 0;i < list.length;i++){
    let num1 = 0  
    for(let j = 0;j < list.length;j++){
        if(list[i] == list[j]){
            num1++
        }
    }
    if(num1 === 1) {
        flrt.push(list[i])
    }
}

console.log(flrt)