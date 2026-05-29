// შექმენით სია. თუ ამ სიის სიგრძე არის 5-ზე მეტი, მაშინ ბოლო ელემენტი ამოშალეთ. თუ ნაკლებია მაშინ ჩაამატეთ თქვენი სახელი.

let list = ["eeee", "soso", "tengo", "vladikavkaz", "pavlianti"]

list.length > 5 ? list.pop(): list.push("giorgi")

console.log(list)