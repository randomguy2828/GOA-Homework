function camelCase(str) {
  let result = ""
  let words = str.split(" ")

  for(let i = 0; i < words.length; i++){
    let word = words[i]
    if(word.length > 0){
      let firstLetter = word[0].toUpperCase()
      let rest = word.slice(1)
      result = result + firstLetter + rest
    }
  }

  return result
}