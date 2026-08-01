let count1 = 0 
let number = document.getElementById("number")

function colortest(){
    if(count1 > 0){
        number.style.color = "green"
    }
    else if(count1 < 0){
        number.style.color = "red"
    }
    else{
        number.style.color = "white"
    }
}

function gazrda(){
    count1++
    number.textContent = count1
    colortest()
}

function kleba(){
    count1--
    number.textContent = count1
    colortest()
}
function reset(){
    count1 = 0
    number.textContent = count1
    colortest()
}

