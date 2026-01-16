function validateNumber(str) {
  let cleaned = ""
  for(let i = 0; i < str.length; i++){
    if(str[i] !== '-'){
      cleaned += str[i]
    }
  }

  if(cleaned === ""){
    return "Plenty more fish in the sea"
  }

  if(cleaned[0] === "0" && cleaned[1] === "7" && cleaned.length === 11){
    return "In with a chance"
  }

  if(cleaned[0] === "+" && cleaned[1] === "4" && cleaned[2] === "4" && cleaned.length === 13){
    return "In with a chance"
  }

  return "Plenty more fish in the sea"
}