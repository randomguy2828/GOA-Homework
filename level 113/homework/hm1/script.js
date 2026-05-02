// 1)გაქვს ობიექტი user

// მოთხოვნები:

// _age იყოს private property

// setter არ უნდა აძლევდეს უარყოფით მნიშვნელობას(შეამოწმე თუ უატყოფითა არ შეცვალო თუ დადებითია შეცვალე ახალი მნშვნელპბით)

// getter აბრუნებდეს ასაკს

// თუ არასწორი მნიშვნელობაა → console.log("არასწორი ასაკი")

let user = {
    _age: 17,

    get age(){
        return this._age
    },
    
    set age(newage){
        if(typeof newage !== "number" || newage < 0){
            console.log("არასწორი ასაკი")
        } 
        else{
            this._age = newAge
        }
    }
}

console.log(user.age)


