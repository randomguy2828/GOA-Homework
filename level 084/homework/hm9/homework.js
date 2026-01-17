const secret = "MRBRUWU";

const word = prompt("შეიყვანეთ სიტყვა");
const num = Number(prompt("შეიყვანეთ რიცხვი"));

console.log((word === secret && num > 10 && num < 20));