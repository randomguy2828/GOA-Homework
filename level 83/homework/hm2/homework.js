let num1 = Number(prompt("პირველი რიცხვი"));

let num2 = Number(prompt("მეორე რიცხვი"));

let operation = prompt("აირჩიეთ მოქმედება +, -, *, /");

let result;

if (operation === "+") {
  result = num1 + num2;
}
else if (operation === "-") {
  result = num1 - num2;
} 
else if (operation === "*") {
  result = num1 * num2;
} 
else if (operation === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
  } else {
    result = "ნული";
  }
} else {
  result = "არასწორი მოქმედება";
}

alert("შედეგი " + result);