// მომხმარებელს შემოატანინეთ რიცხვი და ტექსტი. ამ ტექსტში მე0 ინდექსიდან შემოტანილი ინდექსის ჩათვლით გამოიტანეთ ყველა ასო გაერთიანებულად 2-ის გამოტოვებით.

const index = Number(prompt())
const text = prompt();

let result = ""

for(let i = 0; i <= index; i++){
    if (i !== 2) {
    result += text[i]
}
}

console.log(result)