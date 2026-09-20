
let p = document.getElementById("p")


setInterval(() => {
    let date = new Date()

    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    p.textContent = `${hour}:${min}:${sec}`
},1000)


let fourcube = document.getElementById("fourcube")
let img = document.getElementById("img1")

fourcube.addEventListener("click", function(event){
    if(event.target.classList.contains("color")){
        img.src = `./${event.target.id}.png`
    }
})

// fourcube.addEventListener("click", function(event){
//     if(event.target.classList.contains("color1")){
//         img.src = "./black.png"
//     }
//     if(event.target.classList.contains("color2")){
//         img.src = "./red.png"
//     }
//     if(event.target.classList.contains("color3")){
//         img.src = "./blue.png"
//     }
//     if(event.target.classList.contains("color4")){
//         img.src = "./purple.png"
//     }
// })
