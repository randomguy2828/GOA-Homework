// შექმენით სია სადაც იქნება რიცხვები. თუ რიცხვი ლუწია მაშინ ჯამი გაამრავლეთ ამ რიცხვზე, თუ კენტია უბრალოდ მიუმატეთ და დააბრუნეთ შედეგი

let numbers = [2, 3, 4, 5, 6]

let func = numbers.reduce((sum, num) => {
    if(num % 2 === 0){
        return sum * num
    }else{
        return sum + num
    }
},0)

console.log(func)
