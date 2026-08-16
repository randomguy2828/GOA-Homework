// onkeydown-ზე:
// გამოიტანე <p>-ში რომელი ღილაკი დააჭირა მომხმარებელმა.
// მაგალითად: „დაჭერილია: a“
// თუ ღილაკი არის Enter, გამოიტანე „Enter დააჭირე!“
// თუ Space-ია, გამოიტანე „Space დააჭირე!“ ... 


// onkeyup-ზე:
// ტექსტი შეიცვალოს:
// „ღილაკს ხელი აუშვი: a“
// თუ Enter იყო → „Enter გათავისუფლდა!“ ... 

let info = document.getElementById("info")

function rame(event){
    if(event.key === "Enter"){
        info.textContent = "Enter დააჭირე!"
    }
    else if(event.key === " "){
        info.textContent = "Space დააჭირე!"
    }
    else{
        info.textContent = "დაჭერილია:" + event.key
    }
}

function rame1(event){
    if(event.key === "Enter"){
        info.textContent = "Enter გათავისუფლდა!"
    }
    else{
        info.textContent = "ღილაკს ხელი აუშვი:" + event.key
    }
}