const num = Number(prompt("შეიყვანეთ რიცხვი"));

if ((num >= 0 && num <= 10) || (num >= 90 && num <= 100)) {
  console.log("რიცხვი შუალედშია");
} 
else {
  console.log("რიცხვი არ არის");
}