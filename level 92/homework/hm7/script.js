// მოცემული გაქვთ სია:,
// [
//     [1, 0, 0, 1, 0],
//     [0, 1, 0, 0, 0], 
//     [0, 1, 0, 0, 1]
// ] // ერთი სია არის და ამ სიის შიგნით სამი სია,

// თითოეული ეს სია შეაერთეთ და გადაიყვანეთ ათობით სისტემაში. შემდეგ დაალაგეთ კლებადობით.

let list = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 1]
];

let numbers = [];

for(let i = 0; i < list.length; i++){
    let fr = list[i]
    let dc = 0
    for(let j = 0; j < fr.length; j++){
        let pr = fr.length - j - 1
        dc = dc + fr[j] * (2 ** pr)
    }
    numbers.push(dc)
}

for(let i = 0; i < numbers.length; i++){
    for(let j = i + 1; j < numbers.length; j++){
        if(numbers[i] < numbers[j]){
            let sum = numbers[i]
            numbers[i] = numbers[j]
            numbers[j] = sum
        }
    }
}

console.log(numbers)