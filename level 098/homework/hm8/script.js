function spinWords(string) {
  let words = string.split(" ")
  let result = []

  for(let i = 0; i < words.length; i++){
    let word = words[i]
    if(word.length >= 5){
      let reversed = ""
      for(let j = word.length - 1; j >= 0; j--){
        reversed += word[j]
      }
      result.push(reversed)
    } 
    else{
      result.push(word)
    }
  }

  let final = ""
  for(let i = 0; i < result.length; i++){
    final += result[i]
    if(i < result.length - 1){
      final += " "
    }
  }

  return final
}