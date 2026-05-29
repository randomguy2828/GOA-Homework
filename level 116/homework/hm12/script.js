// შექმენით სია სადაც იქნება სტრინგები. გადაუარეთ მას და გამოიტანეთ თითოეული სტრინგი upper case-ად.

let words = ["mwadi", "lobiani", "xinkali"]

let upper = words.map(function(item){
    return item.toUpperCase()
})

console.log(upper)
