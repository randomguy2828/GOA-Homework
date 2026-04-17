// შექმენით სია სადაც იქნება მინიმუმ 7 სტრინგი. დააბრუნეთ ყველაზე გრძელი სიტყვა.

let list = ["sword", "manhwa", "dragon", "monopoly", "minecraft", "georgia", "barca"]

let longWord = list.reduce((longest, current) => {
    return current.length > longest.length ? current : longest
}, "")

console.log(longWord)
