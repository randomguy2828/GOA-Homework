// 1)შექმენი ობიექტი ავტომობილების შესახებ --> brand , model , year , color
// შენიდ დავალებაა რომ შებამისი მეთოდის დახმარებით მიიღო სია სადაც იქნბება კიდევ სიები key , value წყვილებით ,
// შენი დავალებაა კონსოლში გამოიტანო key ები ცალკე value ბი ცალკე(გამოიყენე for ან forEach)

let car = {
    brand: "mercedes",
    model: "romelime",
    year: 2015,
    color: "black",
    method(){
        let i = Object.entries(car)
        i.forEach(([key, value]) => {
            console.log(key)
            console.log(value)
        })
    }
}

car.method()

