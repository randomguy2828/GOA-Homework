const num = Number(prompt("შეიყვანეთ რიცხვი:"));

console.log(
  (num % 4 === 0 && num % 3 === 0 || num % 5 === 0) && "კი" || "არა");