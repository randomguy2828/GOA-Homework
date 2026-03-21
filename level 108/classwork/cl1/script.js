// შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა ტექსტი სადაც იქნება როგორც ასოები, ასევე რიცხვები და სხვა დანარჩენი სიმბოლო.
//  ობიექტის სახით დააბრუნეთ ასოები, რიცხვები და სხვა სიმბოლოები რამდენჯერ მეორდება.

let mokledra = (text) => {
    let result = {
        letters: {},
        symbols: {},
        numbers: {}
    }
    
    let alp = "abcdefghijklmnopqrstuvwxyz"
    let dig = "0123456789"

    for(let i of text){
        let lower = i.toLowerCase()
        
        if(alp.includes(lower)){
            result.letters[i] = (result.letters[i] || 0) + 1
        }
        else if(dig.includes(i)){
            result.numbers[i] = (result.numbers[i] || 0) + 1
        }
        else{
            result.symbols[i] = (result.symbols[i] || 0) + 1
        }
    }

    return result
}

