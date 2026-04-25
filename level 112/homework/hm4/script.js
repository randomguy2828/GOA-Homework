// 4)შექმენი user:
// სადაც იქნება : 
// _email

// setter:
// უნდა შეცვალოს ემაილი(_email)

// წესები:

// ახალი ემაილი უნდა შეიცავდეს "@" და "." ერთად

// getter:

// აბრუნებს _email ს

let user = {
    _email: "gorgogaduma@gmail.com",
    
    get email(){
        return this._email
    },
    
    set email(newEmail){
        if(newEmail.includes("@") && newEmail.includes(".")){
            this._email = newEmail
            console.log("Email updated successfully!")
        }
        else{console.log("wrong")}
    }
}
