const num1 = Number(prompt("შეიყვანეთ რიცხვი"));
const num2 = Number(prompt("შეიყვანეთ რიცხვი"));

if (num1 > 0 && num2 > 0 && num1 + num2 > 100) {
  console.log("ორივე რიცხვი დადებითია და მათი ჯამი მეტია 100-ზე");
} 
else {
  console.log("პირობა არ სრულდება");
}