// შექმენით ობიექტი რომელშიც იქნება ოთხი მეთოდი (შეკრება, გამოკლება, გამრავლება, გაყოფა).
//  და თითოეულ მათგანს ჰქონდეს ორი პარამეტრი, რომელსაც გამოძახების დროს გადაეცემა არგუმენტად თქვენ მიერ არჩეული რიცხვი.

let calc = {
    sum: function(a,b){
        return a + b
    },
    minus: function(a,b){
        return a - b
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a + b
    }
}

console.log(calc.sum(10,2))