// 1)შექმენით ფორმა სადაც გექნებათ 3 ტიპის ინფუთი , ტექსტური , ემაილის და პაროლისტვის ,სამივე ინფუთი ჯს ფაილში

// თქვენი დავალებაა როცა მომცმარებელი დააჭერს რომელიმე ინფუთს ინფუთის ბორდერი გახდეს წითელი  ,
// ასევე დაემატოს ფადინგები 15px ყვეალა მხრიდან ,როცა ინფუთდან გავა მომხმარებელი მაშინ ფორმას გაუჩნდეს ლურჯი ფერის ბორდერი და პადინგები დაბრუნდეს 0px ზე


let form = document.getElementById("form1")
let inputs = form.querySelectorAll("input")

for(let i of inputs){
    i.onfocus = function(){
        i.style.border = "3px solid red"
        i.style.padding = "15px"
    }

    i.onblur = function(){
        i.style.border = "3px solid blue"
        i.style.padding = "0px"
    }
}