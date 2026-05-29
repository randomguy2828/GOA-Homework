// შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. დააბრუნეთ მხოლოდ სტრინგ ტიპის მონაცემები.

let list = [16, 46, null, false, "xinkali", 7.5, "mwvadi"]

let func = list.filter((string) => {
    if(typeof string == "string"){
        return string
    }
})

console.log(func)