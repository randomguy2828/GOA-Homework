// საიტზე დაამატეთ დივი. შემდეგ სკრიპტში შექმენით ცვლადი. 
// ამ ცვლადის მნიშვნელობა თუ იქნება თქვენი სახელი მაშინ ეს დივი გასტილეთ და შიგნით h1 დაამატეთ სადაც ეწერება თქვენი სახელი.
// სხვა შემთხვევაში სხვა სტილები გადაეცით და ეწეროს მხოლოდ გამარჯობა. (setAttributes და getAttributes გამოიყენეთ.,
// მინიშნება: css ფაილი დაგჭირდებათ)

let name = "giorgi"

let box = document.getElementById("box")

if(name === "giorgi"){
    box.setAttribute("class", "style1")
    box.innerHTML = `<h1>${name}</h1>`
}
else{
    box.setAttribute("class", "style2")
    box.innerHTML = "<h1>rameeee</h1>"
}

console.log(box.getAttribute("class"))
