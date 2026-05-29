// შექმენი სია სადაც შეინახავთ სხვადასხვა ტიპის მინიმუმ 6 ელემენტს. გადაუარეთ forEach-ით და გამოიტანე თავად ელემენტი და გვერდით ეწეროს მონაცემთა ტიპი

let list = ["hello", 42, true, null, 6.8, undefined, "mezareba"]

list.forEach(function(item){
    console.log(item, typeof item)
})
