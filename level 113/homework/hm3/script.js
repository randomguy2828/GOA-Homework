// 3)გაქვს profile

// მოთხოვნები:

// _username private
// setter:
// ყველა ასო უნდა იყოს პატარა (lowercase)
// getter:
// აბრუნებს "@" + username

const profile = {
    _username: "",
    
    set username(){
        if(typeof value === "string"){
            this._username = value.toLowerCase()
        }
        else{
            console.log("არასწორი")
        }
    },
    
    get username() {
        return "@" + this._username
    }
}

profile.username = "giorgi"
console.log(profile.username)



