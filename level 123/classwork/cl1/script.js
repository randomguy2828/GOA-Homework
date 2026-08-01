// შექმენით html ში ერთი ღილაკი


// ამ ღილაკზე დაჭერის შედეგად --> ფუნქციამ ----> შექმნას ერთი ფოტო რომელსაც დაამატებთ body ში

// ასევე შექმნას ერთი სათაური რომელშიც ეწერება hello i am here და ესეც დაამატოს ბოდიში  ასევე ამ სათაურს მიეცით კლასი(js იდან setAtribute)
//  სახელად --> "red" რომელიც css ში გასტილული გექნებათ შემდეგი სტილებით --> color:"red" , font-size:40პხ; 

// ეს ფუნქცია გადაეცით ღილაკს onclick

function createl(){
    let img = document.createElement("img")
    img.src = "messi.jpg"
    document.body.append(img)

    let h1 = document.createElement("h1")
    h1.textContent = "hello i am here"
    h1.setAttribute("class", "red") 
    document.body.append(h1)
}