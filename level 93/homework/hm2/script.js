// მოცემული გაქვთ სია: ['01001011100', '100111110', '110101010']. ამ სიის თითოეული ელემენტი არის ორობით სისტემაში. გადაიყვანეთ ათობითში და ჩაამატეთ ახალ სიაში.

let list = ['01001011100', '100111110', '110101010']
let newlist = []

for(let i = 0;i < list.length;i++){
    let newlist1 = list[i]
    let num = 0
    for(let j = 0;j < newlist1.length;j++){
        let holder = newlist1.length - 1 - j
        num = num + Number(newlist1[j] * 2 ** holder)
    }
    newlist.push(num)
    console.log(num)
}    
