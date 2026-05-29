// შექმენით ფუნქცია რომელიც არგუმენტად გადაცემულ ტექსტს შეამოწმებს პალინდრომეა თუ არა (საწყისი ვერსია == შებრუნებული ვერსია)

function func(text) {
    let rev = ''
    
    for(let i = text.length - 1; i >= 0; i--){
        rev = rev + text[i]
    }

    if(text === rev){
        return true
    }
    else{
        return false
    }
}

