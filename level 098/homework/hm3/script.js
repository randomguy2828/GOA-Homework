function digitalRoot(n) {
  while (n >= 10) {
    let digits = String(n)
    let sum = 0
    
    for (let i = 0; i < digits.length; i++){
      sum = sum + Number(digits[i])
    }
    n = sum
  }
  return n
}