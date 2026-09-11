
let p = document.getElementById("p")


setInterval(() => {
    let date = new Date()

    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    p.textContent = `${hour}:${min}:${sec}`
},1000)