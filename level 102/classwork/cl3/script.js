// 3)შექმენით მანქანის ობიექტი, სადაც იქნება სახელი,ბრენდი,წელი და ფერი,~

// შენი დავალებაა წვდომა მოიპოვო თითოეულ ობიექტის key ზე და კონსოლში გამოიტანო ისინი ცალ ცალკე

// შენი დავალებაა რომ წვდომა მოიპოვო ობიექტის ითოეულ value ზე და კონსოლში გამოიტანო ისინი ცალ ცალკე

let car = {
    model: "lamborghini aventador",
    brand: "Lamborghini",
    year: 2014,
    color: "red"
}


keys = Object.keys(car)

for(let key of keys){
    console.log(key)
}

values = Object.values(car)

for(let value of values){
    console.log(value)
}