// შექმენი ცვლადი month (1–12).

// switch-ით გააკეთე:

// 1 → "იანვარი - ზამთარი"

// 2 → "თებერვალი - ზამთარი"

// 3 → "მარტი - გაზაფხული"

// 4 → "მარტი - გაზაფხული"

// 5 → "მაისი - გაზაფხული"

// 6 → "ივნისი - ზაფხული"

// 7 → "ივლისი - ზაფხული"

// 8 → "აგვისტო - ზაფხული"

// 9 → "სექტემბერი - შემოდგომა"

// 10 → "ოქტომბერი - შემოდგომა"

// 11 → "ნოემბერი - შემოდგომა"

// 12 → "დეკემბერი - ზამთარი"

// თუ 1–12 არ არის → "არასწორი თვე"

let month = 1

switch(month){
    case 1:
        console.log("იანვარი - ზამთარი")
        break
    case 2:
        console.log("თებერვალი - ზამთარი")
        break
    case 3:
        console.log("მარტი - გაზაფხული")
        break
    case 4:
        console.log("მარტი - გაზაფხული")
        break
    case 5:
        console.log("მაისი - გაზაფხული")
        break
    case 6:
        console.log("ივნისი - ზაფხული")
        break
    case 7:
        console.log("ივლისი - ზაფხული")
        break
    case 8:
        console.log("აგვისტო - ზაფხული")
        break
    case 9:
        console.log("სექტემბერი - შემოდგომა")
        break
    case 10:
        console.log("ოქტომბერი - შემოდგომა")
        break
    case 11:
        console.log("ნოემბერი - შემოდგომა")
        break
    case 12:
        console.log("დეკემბერი - ზამთარი")
        break
    default:
        console.log("არასწორი თვე")
}