// 1)შექმენი user ობიექტი:

// _password
// username

// მოთხოვნები:

// შექმენი getter password → ყოველთვის აბრუნებს "******" (რეალური პაროლი არ უნდა ჩანდეს)
// შექმენი მეთოდი changePassword(oldPass, newPass)

// წესები:

// თუ oldPass არ ემთხვევა → არ შეცვალოს
// newPass უნდა იყოს მინიმუმ 6 სიმბოლო 

let user = {
    username: "Giorgi",
    _password: "Naruto2828",
    
    get password(){
        return "******"
    },
    
    changePassword(oldPass, newPass){
        if (oldPass !== this._password){
            return "Old password is incorrect!"
        }
        else if(newPass.length < 6){
            return "New password must be at least 6 characters!"
        }
        else{
            this._password = newPass
            return "Password changed successfully!"
        }
    }
}