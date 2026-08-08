// 2)დავალება:
// შექმენი ღილაკი "❤️ Like". ყოველ დაჭერაზე:

// რიცხვი გაიზარდოს 1-ით.

// როდესაც ლაიქები 10-ს გადააჭარბებს, გამოჩნდეს ტექსტი:

// "Popular Post!"

// ბონუსი: 50 ლაიქზე ტექსტი გახდეს ოქროსფერი.

let count = 0
let like = document.getElementById("like")
let text = document.getElementById("text")

function addlikes(){
    count++
    like.textContent = count
    
    if(count > 50){
        text.textContent = "Popular Post!"
        text.style.color = "gold"
    }
    else if(count > 10){
        text.textContent = "Popular Post!"
        text.style.color = "black"
    } 
    else{
        text.textContent = ""
    }
}

