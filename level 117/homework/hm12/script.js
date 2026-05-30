// შექმენით ფუნქცია registerUser(username, email, password). ფუნქციამ Property Value Shorthand-ის გამოყენებით უნდა დააბრუნოს ობიექტი,
// სადაც ეს სამივე პარამეტრი თვისებებად იქნება ჩაწერილი.

function registerUser(username, email, password) {
    return{
        username,
        email,
        password
    }
}

let user1 = registerUser("giorgi", "gorgogaduma@gmail.com", "ariraaa")

console.log(user1)
