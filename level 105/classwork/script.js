// შექმენით  ობიექტი, რომელშიც იქნება მოსწავლის ინფორმაცია. შემდეგ for in-ის გამოყენებით გადაუარეთ პირველ ობიექტს.
//  და თითოეული სტრინგი გადაამრავლეთ რენდომ რიცხვზე 1-დან 5-მდე და ისე გამოიტანეთ კონსოლში.

let student = {
    name: "giorgi",
    surename: "pavliashvili"
}

for(let key in student){
    if(typeof student[key] === "string"){
        let num = Math.floor(Math.random() * 5) + 1
        let str = ""
        for(let i = 0; i < num; i++){
            str += student[key] 
        }
        console.log(str)
    }
}
