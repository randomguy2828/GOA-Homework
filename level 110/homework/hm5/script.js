// შექმენით ცვლადი სადაც შეინახავთ მინიმუმ 20 წიმბოლოიან სტრინგს სადაც იქნება სფეისებიც. გადააქციეთ ეს სტრინგი სიად და დააბრუნეთ პირველივე ხმოვანი რომელ ინდექსზეა.

let str = "mokled ar momewona es davaleba aravis ar vurchev amis gaketebas"

let char = str.split(" ")
let vowel = "aeiou"

let first = char.findIndex((txt) => vowel.includes(txt))