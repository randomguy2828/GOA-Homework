// შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. დააბრუნეთ მხოლოდ კენტი რიცხვები.

let list = [1, "hello", true, 3, "world", 4.5, 10, 13]

let func = list.filter(item => typeof item === "number" && item % 2 !== 0)

console.log(func)