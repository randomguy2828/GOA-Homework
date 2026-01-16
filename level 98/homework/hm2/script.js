function solution(string) {
  let result = ""
  for(let i = 0; i < string.length; i++){
    let char = string[i]
    
    if(char === char.toUpperCase() && char !== char.toLowerCase()){
      result += " " + char
    }
    else{
      result += char
    }
  }
  return result;
}