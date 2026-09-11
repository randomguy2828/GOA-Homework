// 3)შექმენი ღილაკი:

// Check Today

// დაჭერისას DOM-ში გამოიტანე:

// Today is Monday
// It's a working day.

// ან:

// Today is Sunday
// It's a weekend.

// პირობა:

// გამოიყენე new Date()
// getDay()
// DOM
// if/else

let btn = document.getElementById("button")
let text = document.getElementById("text")

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

btn.addEventListener("click", function(){
    let date = new Date()
    let daynum = date.getDay()
    let dayname = days[daynum]


    if(daynum === 0 || daynum === 6){
        text.textContent = "Today is " + dayname + "It's a weekend."
    }
    else{
        text.textContent = "Today is " + dayname + "It's a working day."
    }
})