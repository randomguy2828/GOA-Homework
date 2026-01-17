function parse(data) {
  let value = 0      
  let result = []       
  
  for (let i = 0; i < data.length; i++) {
    let command = data[i]
    if (command === 'i') {
      value = value + 1
    } 
    else if (command === 'd') {
      value = value - 1
    } 
    else if (command === 's') {
      value = value * value
    } 
    else if (command === 'o') {
      result.push(value)
    }
  }

  return result
}