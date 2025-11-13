// 10)შექმენი სია სადაც მოათავსებ ადამიანის სახელებს

// შენი დავალებაა რომ კონსოლში გამოიტანო მხოლოდ ის სახელები რომლებიც იწყება ასო "a" ზე და მრთავდება ასო "o" ზე (შეასრულეთ ორივეთი for და while)

let names = ["ana", "aleko", "dato", "avtandil", "nino", "giorgi", "andro"]

for(let i = 0; i < names.length; i++){
    let name = names[i]
    if(name[0] === "a" && name[name.length - 1] === "o"){
        console.log(name)
    }
}

let i = 0
while(i < names.length){
    let name = names[i]
    if (name[0] === "a" && name[name.length - 1] === "o"){
        console.log(name)
    }
    i++
}
