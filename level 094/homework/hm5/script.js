// შექმენით ფუნქცია, რომელსაც გადაეცემა არგუმენტად სახელი. და დააბრუნეთ არის თუ არა თქვენი სახელის ტოლი.

function name(name1){
    if(name1 === myname){
        return console.log("its my name")
    }
}

myname = "giorgi"
name1 = "giorgi"

console.log(name(name1))