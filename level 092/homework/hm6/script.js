// მოცემული გაქვთ სია: [10, 100, 200, 300, 150, 20, 40, 1000, 150, 125, 900] ეს სია დაალაგეთ ზრდადობით.

let list = [10, 100, 200, 300, 150, 20, 40, 1000, 150, 125, 900]
let result = []

for(let i = 0; i < list.length; i++){
    for(let a = 0; a < list.length; a++){
        if(list[a] > list[a + 1]) {
            let num = list[a]
            list[a] = list[a + 1]
            list[a + 1] = num
        }
    }
}

console.log(list)