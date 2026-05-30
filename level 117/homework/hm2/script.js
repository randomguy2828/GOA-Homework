// შექმენი სია სადაც იქნება ჩამოწერილი სახელები (ზოგი განმეორდება). თქვენი დავალებაა რომ დააბრუნოთ ობიექტის სახით თითოეული სახელი რამდენჯერ მეორდება
// (key იქნება თვითონ სახელი და value რაოდენობა)

let names = ["nika", "ana", "ika", "gio", "ana", "mariam", "nika", "luka", "gio", "andriana"]

let func = names.reduce((result, name) => {
    if(result[name]){
        result[name] = result[name] + 1
    }
    else{
        result[name] = 1
    }
    return result
},{})

console.log(func)

