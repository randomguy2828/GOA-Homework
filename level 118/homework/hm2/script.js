// შექმენი სია სადაც იქნება მინიმუმ 20 რიცხვი. მოახდინეთ დესტრუქცია და პირველი სამი ელემენტი შეინახეთ ცალკე, დანარჩენები კი გაერთიანეთ.

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let [ein, zwei, drei, ...danarcheni] = nums

console.log(ein)
console.log(zwei)
console.log(drei)
console.log(danarcheni)