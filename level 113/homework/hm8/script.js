// შექმენი ფუნციადა გადაეცი ორია რგუმენტი a და b
// ,ასევე დაამატე მეთოდები add() minus() რომელიც შეკრებსამ რიცხვებს და მეორე მეთოდი გამოაკლებს ,
// შექმენი ობიექტებიდ ა შეინახე ცვლადებში,ამ ცვლადებზე(ანუ ობიექტებზე) გამოიძახეთ მეთოდები

function createNumbers(a, b){
    return {
        a: a,
        b: b,
        add: function(){
            return this.a + this.b
        },
        minus: function(){
            return this.a - this.b
        }
    }
}

let first = createNumbers(94, 16)
let second = createNumbers(63, 100)
let third = createNumbers(3, 9)

console.log(first.add())
console.log(first.minus())

console.log(second.add())
console.log(second.minus())

console.log(third.add())
console.log(third.minus())
