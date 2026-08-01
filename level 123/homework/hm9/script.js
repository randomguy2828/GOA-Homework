// 9)ღილაკზე დაჭერისას გენერირდეს შემთხვევითი რიცხვი 1-100.

// თუ გამოვიდა:

// 100 → 🎉 JACKPOT
// სხვა შემთხვევაში უბრალოდ დაიბეჭდოს რიცხვი.

// ბონუსი: ondblclick-ზე ისტორია გასუფთავდეს.(reset)

let bt = document.getElementById("bt")
let history = document.getElementById("history")

function randomnum(){
    let num = Math.floor(Math.random() * 100) + 1

    if(num === 100){
        history.textContent = "🎉 JACKPOT"
    }
    else(
        history.textContent = num
    )
}

function reset(){
    history.textContent = " "
}