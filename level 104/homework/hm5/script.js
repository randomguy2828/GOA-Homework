// შექმენით ობიექტი, სადაც იქნება სია. სიაში უნდა იყოს სხვადასხვა ტიპის მონაცემები და მინიმუმ 10 ელემენტი.
//  შიგნით შექმენით ისეთი მეთოდი რომელიც მხოლოდ Number ტიპის მონაცემებს გადაამრავლებს ერთმანეთზე.

let data = {
    list: [2, "hello", true, 5, 3.5, "world", false, 10, null, 4],

    nums: function(){
        let product = 1
        for(let i = 0; i < this.list.length; i++){
            if(typeof this.list[i] === "number") {
                product *= this.list[i]
            }
        }
        return product
    }
}