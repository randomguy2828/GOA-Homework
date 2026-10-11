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

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(nameInput.value === "" || numberInput.value === "" || monthInput.value === "" || yearInput.value === "" || cvcInput.value === ""){
        alert("Can't be blank")
    }
    else if(numberInput.value !== Number(numberInput.value) || 
             monthInput.value !== Number(monthInput.value) || 
             yearInput.value !== Number(yearInput.value) || 
             cvcInput.value !== Number(cvcInput.value)){
        alert("Wrong format, numbers only")
    }
    else if(numberInput.value.length !== 16){
        alert("Card number must be exactly 16 digits")
    }
    else if(monthInput.value.length !== 2 || monthInput.value < 1 || monthInput.value > 12){
        alert("Month must be 2 digits (01 - 12)")
    }

    else if(yearInput.value.length !== 2){
        alert("Year must be 2 digits (e.g. 25)")
    }

    else if(cvcInput.value.length !== 3){
        alert("CVC must be 3 digits")
    }

    else{
        cardName.textContent = nameInput.value
        cardNum.textContent = numberInput.value
        cardDate.textContent = monthInput.value + "/" + yearInput.value
        cardCvc.textContent = cvcInput.value
    }
})