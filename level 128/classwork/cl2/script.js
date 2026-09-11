// 2)შექმენიერთ მრგვალი დივი და შიგნით ჩაწერე ახლანდელი დრო ვითომ საათია ,გამოიყენე setInterval რომელიც ცვლის საათს ყოველ 1000 მილიწამში

// საბოლოო ჯამში უნდა ქონდეს საათის იმიტაცია ვითომ საათია


let clock = document.getElementById("clock")
let p = document.getElementById("p")

clock.style.width = "200px"
clock.style.height = "200px"
clock.style.borderRadius = "50%"
clock.style.backgroundColor = "grey"
clock.style.display = "flex"
clock.style.justifyContent = "center"
clock.style.alignItems = "center"
p.style.color = "white"

setInterval(() => {
    let date = new Date()

    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    p.textContent = `${hour}:${min}:${sec}`
},1000)