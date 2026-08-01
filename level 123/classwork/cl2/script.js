// გვერდზე იყოს ტექსტი:

// 🔒 Locked - წითელი ფერისიყოს სიტყვა Locked

// დავალება:

// ორმაგი დაკლიკების (ondblclick) შემდეგ ტექსტი შეიცვალოს:

// 🔓 Unlocked -ტექსტის ფერიც გახდეს მწვანე.

let stat = document.getElementById("stat")
stat.style.color = "red"

function doubleclick(){
    stat.textContent = "🔓 Unlocked"
    stat.style.color = "green"
}