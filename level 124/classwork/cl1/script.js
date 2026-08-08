// შექმენი ბარათი, რომელზეც თავიდან წერია:

// "გადამატარე მაუსი"

// დავალება:

// onmouseover-ზე:
// ტექსტი შეიცვალოს "🎉 საიდუმლო გაიხსნა!"-ით.
// ფონი გახდეს მწვანე.
// ტექსტის ფერი გახდეს თეთრი.
// ზომა გაიზარდოს (transform: scale(1.1)).

let card = document.getElementById("card")

function change(){
    card.textContent = "🎉 საიდუმლო გაიხსნა!"
    card.style.backgroundColor = "green"
    card.style.transform = "scale(1.1)"
    card.style.color = "white"
}