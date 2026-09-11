// 2)შექმენი <div> და მასში გამოიტანე დღევანდელი თარიღი ასეთი ფორმით:

// Sunday, September 6, 2026

// პირობა: getDay() და getMonth() აბრუნებენ რიცხვებს, ამიტომ შექმენი შესაბამისი მასივები:

// let days = ["Sunday", "Monday", ...];

// let months = ["January", "February", ...];

// და მიღებული რიცხვების მიხედვით გამოიტანე სწორი სახელები.

let date = document.getElementById("date")

let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"
]

let months = ["january","february","march","april","may","june","july","august","september","october","november","december"
]

let now = new Date()

let dayname = days[now.getDay()]
let monthname = months[now.getMonth()]
let day = now.getDay()
let year = now.getFullYear()

date.innerText = `${dayname}, ${monthname} ${day}, ${year} `