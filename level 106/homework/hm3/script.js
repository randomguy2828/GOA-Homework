// შექმენით ფუნქცია, სადაც არგუმენტად გადაეცემა ფუნქციას მომხმარებლის შემოტანილი რიცხვი. switch / case გამოყენებით . თუ ქულა არის
//    100 მაშინ დააბრუნეთ "საუკეთესო შედეგია, ყოჩაღ"
//    90-დან 100 შუალედში - A
//    80-დან 89 შუალედში  - B
//    70-დან 79 შუალედში  - C
//    55-დან 69 შუალედში - D
//    55 -ზე ნაკლებია მაშინ - F
//    სხვა შემთხვევაში "არასწორად შემოიტანეთ ქულა"

function grade(score){
    let result
    switch(true){
        case(score === 100):
        result = "საუკეთესო შედეგია, ყოჩაღ"
            break
        case(score >= 90 && score < 100):
        result = "A"
            break
        case(score >= 80 && score <= 89):
        result = "B"
            break
        case(score >= 70 && score <= 79):
        result = "C"
            break
        case(score >= 55 && score <= 69):
        result = "D"
            break
        case(score < 55 && score >= 0):
        result = "F"
            break
        default:
            result = "არასწორად შემოიტანეთ ქულა"
    }

    return result
}
