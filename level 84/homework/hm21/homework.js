const year = Number(prompt("შეიყვანეთ წელი:"));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("ეს წელი ნაკიანია");
} 
else {
  console.log("ეს წელი არ არის ნაკიანი");
}