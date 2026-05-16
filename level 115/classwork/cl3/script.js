// 3)შექმენი ობიექი რომელშიც იქნება მხოლოდ name 

// შენი დავალებაა დაამატო ამ ობიექტშში გარედან author , year და amount

// შემდეგ შეამოწმე არის თუ არა ობიექტში key სახელად name 

// ასევე შემაოწმე არის თუ არა ობიექტშში key სახელად color

let book = {
    name: "rame"
}

book.author = "dato"
book.year = "1956"
book.amount = 13567

console.log(book.hasOwnProperty("name"))
console.log(book.hasOwnProperty("color"))