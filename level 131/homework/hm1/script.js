let form = document.getElementById("form")
let user = document.getElementById("user")
let email = document.getElementById("email")
let pass = document.getElementById("pass")
let pass2 = document.getElementById("pass2")

let err1 = document.getElementById("err1")
let err2 = document.getElementById("err2")
let err3 = document.getElementById("err3")
let err4 = document.getElementById("err4")

form.addEventListener("submit", function (e){
    e.preventDefault()

    let ok = true

    if(user.value === ""){
        err1.innerText = "username is required"
        ok = false
    }
    else if(user.value.length < 6){
        err1.innerText = "minimum 6 characters"
        ok = false
    } 
    else if(user.value.length > 20){
        err1.innerText = "maximum 20 characters"
        ok = false
    }
    else{
        err1.innerText = ""
    }


    if(email.value === ""){
        err2.innerText = "email is required"
        ok = false
    }
    else if(!email.value.includes("@")){
        err2.innerText = "email must have @"
        ok = false
    }
    else{
        err2.innerText = ""
    }

    if(pass.value === ""){
        err3.innerText = "password is required"
        ok = false
    }
    else if(pass.value.length < 6){
        err3.innerText = "minimum 6 characters"
        ok = false
    }
    else{
        err3.innerText = ""
    }

    if(pass2.value === ""){
        err4.innerText = "repeat password"
        ok = false
    }
    else if(pass.value !== pass2.value){
        err4.innerText = "passwords do not match"
        ok = false
    }
    else{
        err4.innerText = ""
    }

    if(ok){
        alert("done!")
        form.reset()
    }
})