// შექმენით სია სადაც იქნება მინიმუმ 5 განსხვავებული ელემენტი. ზოგიერთი ელემენტი უნდა მეორდებოდეს.
//  შემდეგ შექმენით ობიექტი სადაც ჩაამატებთ ამ ელემენტს როგორც key და მისი მნიშვნელობა იყოს რამდენჯერაც გვხვდება სიაში.

items = ["apple", "banana", "apple", "orange", "banana", "kiwi", "apple"]

counts = {}

for(let item of items) {
    if(counts[item]){
        counts[item] += 1
    } 
    else{
        counts[item] = 1
    }
}

console.log(items)
console.log(counts)