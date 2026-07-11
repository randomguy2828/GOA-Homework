// html ში შექმენი ერთ დივი და წამოიღე ჯს ში

// შემდეგ შენი დავალებაა რომ ამ დივში ჩაამატო ერთი პარაგრაფი რომლის შიგთავსი იქნება child1

// და შემდეგ ჩაამატო ამ დივში სათაური რომლის შიგთავსი იქნება  child2

// ქვენს მიერ შექმნილ პარაგრაფს დააამატე კლასი სახელად child1 რომელსაც css ში გასტილავთ მწვანე ფერად

// თქვენს მიერ შექმნილ სათაურს დაამატე კლასი სახელად child2 რომელსაც css შიგასტილავთ ყვითელ ფრად

let rame = document.getElementById("div1")


let p = document.createElement("p")
rame.appendChild(p)
p.textContent = "child1"
p.setAttribute("class", "child1")

let h = document.createElement("h1")
rame.appendChild(h)
h.textContent = "child2"
h.setAttribute("class", "child2")

