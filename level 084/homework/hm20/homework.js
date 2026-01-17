const num = Number(prompt("შეიყვანეთ რიცხვი"));

if (num % 5 === 0 && num % 10 !== 0) {
  console.log("რიცხვი არის 5-ის ჯერადი და არა 10-ის");
} 
else {
  console.log("პირობა არ სრულდება");
}