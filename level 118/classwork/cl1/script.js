// შექმენით factory function სადაც შეინახავთ მომხმარებლის სახელს, გვარს, მეილს, id-ს, ასაკს, და private property (_balance) სადაც საწყისაც შეინახავთ 100.
// get-მა დააბრუნოს {_balance}$ (უბრალოდ $ დაუმატოს).set-მა გაანახლოს ეს ბალანსი იმ შემთხვევაში თუ გადაცემული მნიშვნელობა იქნება 
// Number ტიპის მონაცემი და დადებითი რიცხვი.

function user(name, surename, email, id, age){
    let _balance = 100
    return {
        name,
        surename,
        email,
        id,
        age,


        get balance(){
            return `${_balance}$`
        },

        set balance(rame){
            if(typeof rame === "number" && rame > 0){
                _balance = rame
            }
        }
    }
}

let user1 = user("giorgi", "pavliaShvili", "gorgogaduma@gmail.com", "102030405060708090", 50)


console.log(user1)
console.log(user1.balance)
user1.balance = 777
console.log(user1.balance)
console.log(user1)