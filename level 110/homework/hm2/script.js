// შექმენით სია სადაც იქნება სტრინგები. დააბრუნეთ ისეთი სტრინგები რომლებიც ხმოვნით იწყება

let list = ["Giorgi", "eka", "otari", "dato"]

let filt = list.filter(word => {
    let firstlet = word[0].toLowerCase()
    return ["a", "e", "i", "o", "u"].includes(firstlet)
})

console.log(filt)