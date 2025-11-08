// მომხმარებელს შემოატანინეთ ტექსტი და ამ ტექსტის პირველი და ბოლო სიმბოლოები გამოიტანეთ ერთად.

const user = prompt("")
let result = ""

if(user.length > 0){
    const first = user[0]
    const last = user[user.length - 1]
    result = first + last
    alert(result)
} 
