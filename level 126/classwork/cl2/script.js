// 2)შექმენით სარეგისტრაციო ფორმა სადაც იქნება ემაილის სახელის და აპროლის შესაყვანი ველები

// შენი დავალებაა რომ ასევე შექმნა ფორმის გარეთ h1 h2 და h3

// oninput ივენთზე როცა მომხმარებელი სახელის გრაფაში დაიწყებს ჩაწერას შეიცვალოს ჰ1 ის მნიშვნელობა იმით თ რაც შეიყვანა მომხმარებელმა სახელის გრაფაში

// onchange ზე როცა მომხ შეავსებს იმეილს შეიცვალოს h2 და შიგ ჩაიწეროს ის მნშვნელობა რაც მომხმარებელმა ჩაწერა იმეილის გრაფაში/იგივე გაიმეორე პაროლისშემთხვევაში და შეცვალე h3 

let txt = document.getElementById("txt")
let em = document.getElementById("em")
let ps = document.getElementById("ps")

let h1 = document.getElementById("h1")
let h2 = document.getElementById("h2")
let h3 = document.getElementById("h3")

txt.oninput = function(){
    h1.textContent = txt.value
}

em.onchange = function(){
    h2.textContent = em.value
}

ps.onchange = function(){
    h3.textContent = ps.value
}