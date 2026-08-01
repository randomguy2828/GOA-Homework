// 8)დავალება:
// შექმენი წითელი ბურთი (div).

// onclick →ყოველ ჯერზე ზომა გაიზარდოს 10px-ით.
// ondblclick → გასკდეს (გაქრეს).

let ball = document.getElementById("ball")
size = 100

function gazrda(){
    size += 10
    ball.style.width = size + "px"
    ball.style.height = size + "px"
}

function fafu(){
    ball.style.display = "none"
}