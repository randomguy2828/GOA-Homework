// 7)ეკრანზე იყოს ტექსტი:

// Password Hidden

// onclick → გამოჩნდეს ********
// ondblclick → გამოჩნდეს ნამდვილი პაროლი.

// გამოჩნდეს იმდენი ფიფქი რამდენი სიმბოლოცაა ზუსტად პაროლში

let password = document.getElementById("password")

function pirveli(){
    password.textContent = "********"
}

function meore(){
    password.textContent = "giorgi28"
}