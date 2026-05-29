// შექმენით ცვლადი სადაც შეინახავთ სტრინგს. ამ სტრინგის სიგრძე თუ არის 8-მდე მაშინ დააბრუნეთ 'პაროლი არის მოკლე'.
// თუ 8-დან 12 შუალედშია მაშინ 'პაროლი არის კარგი სიგრძის'. სხვა შემთხვევაში 'პაროლი არის იდეალური ზომის'.

let string = "xinkalimagaria"

switch(true){
    case (string.length < 8):
        result = 'პაროლი არის მოკლე'
        break
    case (string.length > 8 && string.length):
        result = 'პაროლი არის კარგი სიგრძის'
        break
    default:
        result = 'პაროლი არის იდეალური ზომის'
}

console.log(result)