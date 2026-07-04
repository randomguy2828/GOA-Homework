// 4)შექმენი h1 სადაც შეყვანთ რაიმე ცხოველის სახელს ---> კატა ძაღლი ან ვირი

// შენი დავალებაა შეამოწმო თ h1 შიგთავსი არის dog მაშინ ეკრანზე გამოვიდეს შესბამისი ძაღლის ფოტო

// თუ შიგთავსი არის კატა გამოიტანოს კატის ფოტო  

// სხვა შემთხვევაში ვირის ფოტო ,  გამოიყენე setAtribute getAtribute

let H = document.getElementById("animal")
let pic = document.getElementById("photo")

if(H.innertext === dog){
    pic.setAttribute("src", "dog.jpg")
}
else if(H.innerText === cat){
    pic.setAttribute("src", "cat.jpg")
}
else{pic.setAttribute("src", "Donkey.webp")}