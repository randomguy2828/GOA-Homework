const num1 = Number(prompt("შეიყვანეთ რიცხვი"));
const num2 = Number(prompt("შეიყვანეთ რიცხვი"));

if (num1 < 0 || num2 < 0) {
  console.log("ერთი რიცხვი უარყოფითია");
} 
else {
  console.log("ორივე რიცხვი არ არის უარყოფითი");
}