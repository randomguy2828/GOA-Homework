// შექმენით ობიექტი სადაც შეინახავთ თქვენს იმფორმაციას. მის შიგნით შექმენით მეთოდი რომელიძ გამოძახების შემდეგ თქვენი ასაკის მნიშვნელობას გაზრდის 1-ით.

let me = {
    name: "giorgi",
    surename: "Pavliashvili",
    age: 17,
    age1: function(){
        return this.age + 1
    }
}

console.log(me.age1())