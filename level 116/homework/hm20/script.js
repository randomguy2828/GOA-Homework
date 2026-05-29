// შექმენით ცვლადი და შეინახეთ ნებისმიერი რიცხვი. switch / case გამოყენებით დააბრუნეთ შესაბამისი თვე (თუ 1-12-შუალედში არაა მაშინ default-ზე გადავიდეს)

let num = 1

switch (num){
    case 1:
        month = "ianvari"
        break
    case 2:
        month = "tebervali"
        break
    case 3:
        month = "marti"
        break
    case 4:
        month = "aprili"
        break
    case 5:
        month = "maisi"
        break
    case 6:
        month = "ivnisi"
        break
    case 7:
        month = "ivlisi"
        break
    case 8:
        month = "agvisto"
        break
    case 9:
        month = "seqtemberi"
        break
    case 10:
        month = "octomberi"
        break
    case 11:
        month = "noemberi"
        break
    case 12:
        month = "dekemberi"
        break
    default:
        month = "arasworia"
}

console.log(month)