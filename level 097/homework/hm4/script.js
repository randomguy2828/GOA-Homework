var number = function(busStops){
  let geton = 0
  let getdown = 0
  for(let i = 0; i < busStops.length;i++){
    geton += busStops[i][0]
    getdown += busStops[i][1]
  }
  return geton - getdown
}