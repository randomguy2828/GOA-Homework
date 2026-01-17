let num1 = Number(prompt("პირველი რიცხვი:"));
let num2 = Number(prompt("მეორე რიცხვი:"));
let num3 = Number(prompt("მესამე რიცხვი:"));

let sum = num1 + num2 + num3;

if (sum % 2 === 0) {
  let average = sum / 3;
  alert("ჯამი ლუწია" + average);
} 
else {
  let multip = sum * 2;
  alert("ჯამი კენტია" + multip);
}