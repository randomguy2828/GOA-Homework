// შექმენით ფუნქცია, რომელსაც გადაეცემა ტექსტი. ფუნქციამ უნდა დააბრუნოს ობიექტი სადაც იქნება რამდენი დიდი  და პატარა ასო არის მოცემულ ტექსტში

let count = (text) => {
    let upperCount = 0
    let lowerCount = 0
    let letters = "abcdefghijklmnopqrstuvwxyz"
    
    for(let char of text){
        let lowerChar = char.toLowerCase()
        if(letters.includes(lowerChar)){
            if(char === char.toUpperCase()){
                upperCount++
            } else{
                lowerCount++
            }
        }
    }
    
    return {
    uppercase: upperCount,
    lowercase: lowerCount
  }
}

