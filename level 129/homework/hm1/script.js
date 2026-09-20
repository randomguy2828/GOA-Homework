let images = ["leopard.jpg", "fox.jpg", "otter.jpg", "meerkat.jpg"]

let Index1 = 0

let sliderImage = document.getElementById("sliderImage")
let prevBtn = document.getElementById("prevBtn")
let nextBtn = document.getElementById("nextBtn")

nextBtn.addEventListener("click", function(){
    Index1++
    if(Index1 >= images.length){
        Index1 = 0
    }
    sliderImage.src = images[Index1]
})

prevBtn.addEventListener("click", function(){
    Index1--
    if(Index1 < 0){
        Index1 = images.length - 1
}
  sliderImage.src = images[Index1]
})