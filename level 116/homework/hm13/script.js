// შექმენით სია სადაც იქნება მინიმუმ 15 ელემენტი სხვადასხვა მონაცემთა ტიპის. გადაუარეთ map-ით და თუ სტრინგია მაშინ lowercase-ად გადააქციეთ.
//  თუ number-ია მაშინ აიყვანეთ კვადრატში იმ შემთხვევაში თუ ფესვი არ აქვს. სხვა შემთხვევაში დააბრუნეთ როგორც არის.

let func = data => data.map(item => {
    if(typeof item === "string"){
        return item.toLowerCase()
    }
    else if (typeof item === "number"){
        let sqrt = Math.sqrt(item)
        if(sqrt % 1 !== 0) {
            return item * item
        }
        else{
            return item
        }}
        else{
            return item
        }
    }
)

let data = ["HELLO", "davigale", 5, 64, 16, true, null, "vax", 7, 2.5, "JS", 3.5, "xinkali", 11, false]

console.log(func(data))
