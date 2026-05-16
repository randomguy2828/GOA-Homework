// შექმენი ობიექტი სახელად user. Setter-ის გამოყენებით გააკეთეთ ისე, რომ მომხმარებლის სახელი (username) იყოს მინიმუმ 5 სიმბოლო, სხვა შემთხვევაში დააბრუნოს შეცდომა.

let user = {
    _username: "",

    set username(value){
        if(typeof value === "string" && value.length >= 5) {
            this._username = value
        }
        else{
            console.log("wrong")
        }
    },

    get username(){
        return this._username
    }
}

user.username = "Nika"       
console.log(user.username)  
