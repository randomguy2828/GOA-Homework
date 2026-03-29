// swicth / case + ternary operator
// მომხმარებელს შემოატანინეთ კვირის დღე და თანხა. თუ 
// ორშაბათია, გაუკეთეთ 5% ფასდაკლება,
// სამშაბათი - 10%
// ოთხშაბათი - 15%
// ხუთშაბათი - 20%
// პარასკევი - 25%
// შაბათი - 50%
// კვირა - 50%
// სხვა შემთხვევაში, "ასეთი დღე ან თანხა არ არსებობს"

let day = prompt()
let amount = Number(prompt())

let result

switch (day()) {
	case "ორშაბათი":
		result = amount * 0.95
		break
	case "სამშაბათი":
		result = amount * 0.90
		break
	case "ოთხშაბათი":
		result = amount * 0.85
		break
	case "ხუთშაბათი":
		result = amount * 0.80
		break
	case "პარასკევი":
		result = amount * 0.75
		break
	case "შაბათი":
        result = amount * 0.50
        break
	case "კვირა":
		result = amount * 0.50
		break
	default:
		result = "არასწორი"
}

console.log(result)