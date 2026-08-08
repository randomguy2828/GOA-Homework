// 7)ეკრანზე იყოს ტექსტი:

// Password Hidden

// onclick → გამოჩნდეს ********
// ondblclick → გამოჩნდეს ნამდვილი პაროლი.

// გამოჩნდეს იმდენი ფიფქი რამდენი სიმბოლოცაა ზუსტად პაროლში

let password = document.getElementById("password")
let mypassword = "g"
function pirveli(){
    password.textContent = "*".repeat(mypassword.length)
}

function meore(){
    password.textContent = mypassword
}