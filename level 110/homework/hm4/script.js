// შექმენით სია სადაც იქნება მინიმუმ 5 რიცხვი. გადაუარეთ ამ სიას და კვადრატში აიყვანეთ თითოეული მათგანი. 
// შემდეგ წამოიღეთ მხოლოდ ისეთი რიცხვები რომლებიც არის ორნიშნა

let numbers = [3, 5, 7, 10, 12]

let squared = numbers.map(num => num * num)

let twonum = squared.filter(num => num >= 10 && num <= 99)

twonum.forEach(num => console.log(num))

console.log(twonum)
