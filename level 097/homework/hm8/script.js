function likes(names) {
  let message = ""
  
  if(names.length === 0){
    message = "no one likes this"
}
  else if(names.length === 1){
    message = names[0] + " likes this"
} 
  else if(names.length === 2){
    message = names[0] + " and " + names[1] + " like this"
}
  else if(names.length === 3){
    message = names[0] + ", " + names[1] + " and " + names[2] + " like this"
} 
  else{
    let others = names.length - 2
    message = names[0] + ", " + names[1] + " and " + others + " others like this"
}
  return message
}