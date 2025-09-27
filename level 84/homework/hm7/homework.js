const num = Number(prompt("შეიყვანეთ რიცხვი:"));

console.log((num % 3 === 0 || num % 2 === 0) && "რიცხვი იყოფა 3ზე ან 2ზე" || "არ იყოფა");