// შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. დააბრუნეთ ისეთი ელემენტები რომლებიც სტრინგები არის.

let list = ["gamarjoba", "giorgi", 20, 21, true, 2.12]

let result = list.filter((variable) => typeof variable === "string")

 console.log(result)