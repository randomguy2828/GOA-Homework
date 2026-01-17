// მომხმარებელს შემოატანინეთ რიცხვი და ამ რიცხვის ჩათვლით ყველა რიცხვი გადაამრავლეთ.

let num = Number(prompt())
let product = 1;

for(let i = 1; i <= num; i++){
    product = product * i;
}
console.log(product)