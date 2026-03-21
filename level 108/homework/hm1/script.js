// შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა ტექსტი. ფუნქციამ უნდა დააბრუნოს ობიექტი, სადაც ცალ-ცალკე დაითვლით რამდენი ხმოვანია და რამდენი თანხმოვანი.

let countLetter = (txt) => {
    let vowel = "აეიოუ"
    let alphabet = "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწხჯჰ"
    let vowelCount = 0
    let Count = 0
    
    for(let char of txt){
        if(vowel.includes(char)){
            vowelCount++
        }
        else if(alphabet.includes(char)){
            Count++
        }
    }

  let result = [vowelCount, Count]
  return result
}
