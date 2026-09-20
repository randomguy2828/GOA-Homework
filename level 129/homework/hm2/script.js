let form = document.getElementById("cardform")
let nameInput = document.getElementById("nameinput")
let numberInput = document.getElementById("numberinput")
let monthInput = document.getElementById("monthinput")
let yearInput = document.getElementById("yearinput")
let cvcInput = document.getElementById("cvcinput")

let cardName = document.getElementById("cardname")
let cardNum = document.getElementById("cardnum")
let cardDate = document.getElementById("carddate")
let cardCvc = document.getElementById("cvc")

nameInput.addEventListener("input", () => {
    cardName.textContent = nameInput.value || "Jane Appleseed"
})

numberInput.addEventListener("input", () => {
    cardNum.textContent = numberInput.value || "0000 0000 0000 0000"
})

cvcInput.addEventListener("input", () => {
    cardCvc.textContent = cvcInput.value || "000"
});

function updateDate(){
    let mm = monthInput.value || "00"
    let yy = yearInput.value || "00"
    cardDate.textContent = `${mm}/${yy}`
}

monthInput.addEventListener("input", updateDate)
yearInput.addEventListener("input", updateDate)

let thankYou = document.getElementById("thankyou")
let continueBtn = document.getElementById("countinebtn")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(nameInput.value !== "" && numberInput.value !== ""){
        form.style.display = "none" 
        thankYou.style.display = "block"
    }
    else{
        alert("Please fill out the card details")
    }
})
