// შექმენით ფუნქცია, რომელსაც გადაეცემა ერთი სიმბოლო. switch / case გამოიყენეთ დაადგინეთ ეს სიმბოლო ასოა, რიცხვია თუ სხვა სიმბოლო.

let func = (char) => {
    let result
    
    switch(true){
        case (char >= 'A' && char <= 'Z'):
        case (char >= 'a' && char <= 'z'):
            result = "Letter"
        break
        
        case (char >= '0' && char <= '9'):
            result = "Number"
        break
        
        default:
            result = "Other symbol"
        }

  return result
}
