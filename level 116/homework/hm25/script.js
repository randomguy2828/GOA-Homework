// შექმენით ცვლადი სადაც შეინახავთ ნებისმიერ რიცხვს. დააბრუნეთ შესაბამისი კვირის დღე.

let num = 7

let week = num === 1 ? "orshabati": num === 2 ? "samshabati": num === 3 ? "otxshabati": num === 4 ? "xutshabati": num === 5 ? "paraskebi" :
num === 6 ? "shabati" : num === 7 ? "kvira": "arasworia"

console.log(week)