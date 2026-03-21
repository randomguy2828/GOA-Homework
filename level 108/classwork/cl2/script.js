// შექმენით ფუნქცია, რომელსაც გადაეცემა არგუმენტად ტექსტი, სადაც იქნება რიცხვები, ასოები და სხვა სიმბოლოები. 
// თქვენი მიზანია დაითვალოთ თითოეული მათგანი რამდენჯერ გვხვდება და შემდეგ გადაამრავლოთ ერთმანეთზე. 
// (თუ რომელიმე ერთ-ერთის მნიშვნელობა 0 იქნება მაშინ ამ რიცხვზე არ გადაამრავლოთ)

function Count(random){
    let letters = 0
    let numbers = 0
    let symbols = 0
    
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let digits = "0123456789"

  for (let char of random) {
    const lower = char.toLowerCase()
    
    if(alphabet.includes(lower)){
        letters++
    }
    else if(digits.includes(char)){
        numbers++
    }
    else{
        symbols++
    }
  }
  let randomnum = 1
  
  if(letters > 0){
    randomnum *= letters
}
  if(numbers > 0){
    randomnum *= numbers
  }
  if(symbols > 0){
    randomnum *= symbols
  }

  return [letters, numbers, symbols, randomnum]
}


