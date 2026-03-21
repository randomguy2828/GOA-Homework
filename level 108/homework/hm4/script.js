// შექმენით ფუნქცია, რომელსაც გადაეცემა ტექსტი სადაც იქნება რიცხვებიც შერეული. დათვალეთ რამდენი ლუწი ციფრია მოცემულ სტრინგში (ternary operator)

let count = (text) => {
    let evencount = 0
    
    for(let char of text){
        let num = char >= '0' && char <= '9'
        evencount += num && (parseInt(char) % 2 === 0) ? 1 : 0
    }
    return { even: evencount }
}

