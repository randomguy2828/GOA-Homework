// შექმენით ფუნქცია რომელიც გადაცემულ სტრინგში სიმბოლოებს შეუცვლის ქეისებს. (რომელი ასოც წერია პატარად იმას დიდად დაწერს და პირიქით)

function Case(str1) {
    let result = ""

    for(let i = 0; i < str1.length; i++){
        let char = str1[i]
        
        if (char >= 'a' && char <= 'z'){
            result += char.toUpperCase()
        }
        else if (char >= 'A' && char <= 'Z') {
            result += char.toLowerCase()
        }
        else {
            result += char
        }
    }
    return result
}

console.log(Case("Hello"))