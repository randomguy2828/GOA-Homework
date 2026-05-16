// შექმენი ობიექტი bankAccount, სადაც _balance იქნება private.  შექმენი getter, რომელიც დააბრუნებს ბალანსს ფორმატირებულად (მაგ: "$123") და setter,
//  რომელიც დაუშვებს ბალანსის შეცვლას მხოლოდ იმ შემთხვევაში, თუ ახალი მნიშვნელობა დადებითი რიცხვია.

let bankAccount ={
    _balance: 0,

    get balance(){
        return "$" + this._balance
    },

    set balance(amount){
        if(amount > 0){
            this._balance = amount
        }
        else{
            console.log("არასწორი")
        }
    }
}

console.log(bankAccount.balance) 
bankAccount.balance = 200
console.log(bankAccount.balance) 
bankAccount.balance = -50         
console.log(bankAccount.balance)  
