let display = document.getElementById("display")
let buttons = document.querySelectorAll(".btn")

let firstnumber = ""
let operator = ""

buttons.forEach(function (button){
    button.addEventListener("click", function(){
        let value = button.innerText

        if(value === "reset"){
            display.value = ""
            firstnumber = ""
            operator = ""
        }
        else if(value === "del"){
            display.value = display.value.slice(0, -1)
        }
        else if(value === "+" || value === "-" || value === "x" || value === "/"){
            firstnumber = display.value
            operator = value
            display.value = ""
        }
        else if(value === "="){
            let num1 = parseFloat(firstnumber)
            let num2 = parseFloat(display.value)
            
            if(operator === "+"){
                display.value = num1 + num2
            }
            else if(operator === "-"){
                display.value = num1 - num2
            }
            else if(operator === "x"){
                display.value = num1 * num2
            }
            else if(operator === "/"){
                display.value = num1 / num2
            }

            firstnumber = ""
            operator = ""
        }
        else{
            display.value = display.value + value
        }
    })
})