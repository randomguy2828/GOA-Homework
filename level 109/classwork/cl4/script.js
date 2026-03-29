// შექმენით სია სადაც შეინახავთ სტრინგებს,შენი დავალებაა რომ დაითვალო რამდენჯერ მეორდება სიაში ისეთი ელემენტი რომლის სიგრძე მეტია 4 ზე

let list = ["tbilis", "paris", "berlin", "amsterdam", "gori"]
let i = 0

list.forEach((str) => {
    if(str.length > 4){
        i++
    }
})