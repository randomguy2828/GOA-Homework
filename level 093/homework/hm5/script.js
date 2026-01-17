// შექმენით მინიმუმ 5 ელემენტიანი სია, რიცხვებიც იყოს და სტრინგებიც. ამ სიას გადაუარეთ და ყველა რიცხვი გადაამრავლეთ ერთმანეთზე.

let list = [5, "saliami", 7, "world", 15, "xinkali", 4];

let product = 1;

for(let i = 0; i < list.length; i++){
    let num = Number(list[i])
    if(list[i] == num){
        product *= num
    }
}

console.log(product)