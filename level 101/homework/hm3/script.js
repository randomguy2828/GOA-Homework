// შექმენით ობიექტი საიდანაც ამოშლით რომელიმე ორ მნიშვბელობას და ერთს გაანახლებთ.

let games = {
    game1: "minecraft",
    game2: "god of war 4",
    game3: "rocket league",
    game4: "FC 25"
}

delete games["game3"]
delete games["game4"]
games["game2"] = "god of war ragnarok"