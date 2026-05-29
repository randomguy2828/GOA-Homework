// შექმენით ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია. და დააბრუნეთ ამ რიცხვების საშუალო. (შეკრიბავთ და გაყოფთ რაოდენობაზე)

let average = function(list){
    let sum = 0
    
    for(let i = 0; i < list.length; i++){
        sum = sum + list[i]
    }

    let result = sum / list.length
    return result
}

