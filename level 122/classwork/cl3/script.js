// 3)html ში შექმენით ერთი დივი და შიგნით ჩასვი h1 h2 და h3

// შენი დავალებაა რომ რომელიმე შვილიდან მიწვდე მშობელს და მისცე ყვითელი ფერის ბორდერი

// ასევე მშობლიდან ჩაწვდი სამივე შვილს და მიეცი განსხვავებული ტექსტის ზომა და განსხვავებული ფერი

// ასევე ჰ1 ს მიეცი უკანა ფონის ფერი და მიწვდი firstelement ით

// ასევე ჰ2 ს მიეცი უკანა ფონის ფერი დამმიწვდი პირველი ელემენტის შემდეგი ელემენტით nextsibling

// ასევე h3 ს მიეცი უკანა ფონის ფერი და მიწვდი lastelement ით

let div1 = document.getElementById("div")

let h1 = div1.firstElementChild
h1.parentElement.style.border = "yellow"

let hs = div1.children

hs[0].style.color = "green"
hs[0].style.fontSize = "40px"

hs[1].style.color = "black"
hs[1].style.fontSize = "30px"

hs[2].style.color = "yellow"
hs[2].style.fontSize = "20px"

div1.firstElementChild.style.backgroundColor = "orange"
hs[0].nextElementSibling.style.backgroundColor = "grey"
div1.lastElementChild.style.backgroundColor = "black"