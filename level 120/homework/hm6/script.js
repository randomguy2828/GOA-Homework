// მომხმარებელს შემოატანინეთ პაროლი. თუ პაროლი სწორი იქნება მაშინ გამოაჩინეთ საიტზე თქვენი სახელი გვარი. სხვა შემთხვევაში “პაროლი არასწორია” (prompt)

let password = prompt()
let result = document.getElementById("res")

if(password === "random28"){  
    result.innerHTML = "<h1>giorgi pavliashvili</h1>"
}
else{
    result.innerHTML = "<h1>wrong</h1>"
}