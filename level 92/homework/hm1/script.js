// მომხმარებელს შემოატანინეთ სიტყვა. ეს სიტყვა ჩაამატეთ სიის თავში იმ შემთხვევაში თუ ეს სიტყვა არ არის ამ სიაში.
//  სხვა შემთხვევაში თვითონ ეს სიტყვა შეაბრუნეთ და სიის ბოლოში ჩაამატეთ.

let list = ["apple", "banana", "cherry"]
let word = prompt()

if(!list.includes(word)){
    list.unshift(word)
}
else{
    let reversed = ""
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    list.push(reversed)
}
console.log(list)