// შექმენით ორი ობიექტი. პირველ ობიექტში უნდა იყოს id, სახელი, გვარი, დაბადების დღე. მეორე ობიექტში იგივე id, მეილი, პაროლი. ეს ორი ობიექტი გაერთიანეთ.

let pirveli = {
    id: 1123544676,
    name: "giorgi",
    surname: "pavliashvili",
    birthday: "28 january"
}

let meore = {
    id: 1123544676,
    email: "giorgi@pavle",
    password: "magariparolia"
}

let gaertianeba = Object.assign(pirveli, meore)

console.log(gaertianeba)
