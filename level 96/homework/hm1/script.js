function century(year) {
  let str = String(year)
  if(year % 100 === 0){
    return year / 100
  }
  else{
    return Number(str.slice(0, -2)) + 1
  }
}