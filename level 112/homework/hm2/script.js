// 2)შექმენი bankAccount:

// _balance

// მეთოდები:

// deposit(amount)
// withdraw(amount)

// წესები:

// amount > 0 ანუ შესატანი თანხა(0 ლარს ვერ შევიტანთ)
// withdraw არ უნდა აღემატებოდეს ბალანსს(თუ ბალანსზე 100 ლარი გვაქ 200 ვერ გამოვიტანთ D)

// შექმენი getter:
// რომელიც აბრუნებს 
// balance ს

let bankAccount = {
    _balance: 0,
    
    get balance(){
        return this._balance
    },
    
    deposit(amount){
        if(amount > 0){
            this._balance = this._balance + amount
            return "Deposited " + amount + this._balance
        }
        else{
            return "more than 0"
        }
    },
    
    withdraw(amount) {
        if(amount < this._balance){
            this._balance = this._balance - amount
        } 
        else if(amount > this._balance){
            return "not enough"
        }
    }
}

console.log(bankAccount.balance)