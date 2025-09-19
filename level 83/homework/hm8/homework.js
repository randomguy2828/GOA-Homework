let num1 = prompt("შეიყვანე პირველი რიცხვი");
let num2 = prompt("შეიყვანე მეორე რიცხვი:");

if (num1 > num2) {
  alert("უდიდესი რიცხვია " + num1);
} 
else if (num2 > num1) {
  alert("უდიდესი რიცხვია" + num2);
} 
else {
  alert("ორივე რიცხვი ტოლია");
}