// შექმენით სია სადაც გექნებათ რიცხვები და სტრინგები. იპოვეთ პირველივე სტრინგ ტიპის ელემენტის ინდექსი და სიიდან ამოშალეთ.

let list = [10, 20, "random", 30, "bonjour", 40]

let func = list.findIndex((item) => {
    return typeof item === "string"
})

if(func !== -1){
    list.splice(func, 1)
}


