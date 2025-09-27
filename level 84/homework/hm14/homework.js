const num = Number(prompt("შეიყვანეთ რიცხვი"));

if ((num >= 50 && num <= 100) || num === 200) {
  console.log("რიცხვი აკმაყოფილებს პირობას");
}
else {
  console.log("რიცხვი არ აკმაყოფილებს პირობას");
}