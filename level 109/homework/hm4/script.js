// შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები.
//  თუ ელემენტი number ტიპის მონაცემია მაშინ აიყვანეთ კვადრატში.
//  თუ სტრინგია მაშინ შეაბრუნეთ და ისე დააბრუნეთ. სხვა შემთხვევაში როგორც არის ისე დააბრუნეთ.

let List = [5, "hello", true, 12, "world", 3.5]

let List2 = []

List.forEach(function(item){
    if(typeof item === "number"){
        List2.push(item * item)
    }
    else if(typeof item === "string"){
        let reversed = ""
        for(let i = item.length - 1; i >= 0; i--){
            reversed += item[i]
        }
        List2.push(reversed)
    }
    else{
    List2.push(item)
}
})

console.log(List2)