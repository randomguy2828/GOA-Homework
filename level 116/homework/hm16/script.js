// შექმენით სია სადაც იქნება მინიმუმ 10 სტრინგი. გამოიტანეთ ყველა ისეთი სტრინგი რომლის პირველი სიმბოლოც არის დიდად დაწერილი (upper case)

let list = [
  "Khachapuri", "mtsvadi", "Lobiani", "pkhali", "Churchkhela",
  "khinkali", "Mchadi", "chvishtari", "Tkemali", "badrijani"
]

list.forEach(function(list){
    if (list[0] === list[0].toUpperCase()){
    console.log(list)
}})
