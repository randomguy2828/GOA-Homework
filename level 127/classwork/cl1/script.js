// 1)ფორმა რომელსაც ექნება ერთ შესაყვანი ველი , 
// შენი დავალებაა addEventListener ის დახმარებით oninput ზე ანუ რასაც
//  მომხმარებელი შეიყვანს შესაყვან ველში ეგ ტექსტი იცვლებოდეს და ხდებოდეს რაიმე პარაგრაფის ტექსტკონტენტი

let input = document.getElementById("input1")
let output = document.getElementById("text")

input.addEventListener("input", function(){
    output.textContent = input.value
})