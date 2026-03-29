// შექმენით ფუნქცია, რომელიც არგუმენტად გადაცემულ სტრინგს დაშლის და ობიექტის სახით დაგვიბრუნებს რომელი სიმბოლო რამდენჯერ მეორდება.

let func = (str) => {
    let result = {}
    
    for(let char of str){
        if(char in result){
            result[char]++ 
        } 
        else{
            result[char] = 1
            }
        }

  return result
}


