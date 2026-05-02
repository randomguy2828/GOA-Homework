// 2)შექმენით ფუნქცია სახელად createPerson() რომელმაც უნდა შექმნას ობიექტები რომლებსაც ექნებათ -->

// name , surname , age , eyeColor , adress 

// ფუნქციამ უნდა დააბრუნოსმ ობიექტი ზემოთ მოცემული მნიშვნელობებით

// შექმენი 5 ცვლადი და 5 ივე ცვლადში შეინახე ობიექტები გაჯსხვავებული მნიშვნელობებით

// დააკონსოლლოგე ყველა მათგანი რომ ნახო შედეგი

function createPerson(name, surname, age, eyeColor, address){
    return {
        name: name,
        surname: surname,
        age: age,
        eyeColor: eyeColor,
        address: address
    }
}

console.log(createPerson("Giorgi", "pavliashvili", 17, "green", "ravi"))
console.log(createPerson("erekle", "ghonghadze", 16, "blue", "ravi"))
console.log(createPerson("qeti", "jarmelishvili", 61, "black", "ravi"))
console.log(createPerson("nika", "babiashvili", 21, "lightbrown", "ravi"))
console.log(createPerson("tarieli", "zaridze", 58, "brown", "ravi"))