//for loop - ის გამოყენებით, მომხმარებლის შემოტანილი რიცხვის ჩათვლით შეკრიბეთ ყველა რიცხვი და გამოიტანეთ საბოლოო ჯამი.

let us = prompt("რიცხვი");
let num = Number(us);

let sum = 0;

for(let i = 1; i <= num; i += 1) {
  sum += i;
}

console.log("ჯამი " + sum);