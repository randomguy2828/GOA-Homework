// 2)შექმენი ერთი პარაგრაფი და მასზე დაჭერის შედეგად მისი ფერი შეიცვალოს,მისი უკანა ფერი შეიცვალოს , მისი ზომა შეიცვალოს , 

let text = document.getElementById("text")

text.addEventListener("click", function(){
    text.style.color = "red"
    text.style.backgroundColor = "black"
    text.style.fontSize = 40 + "px"
})