let password = game.askForString("WHAT IS THE PASSWORD?")
if (password == "Pizzas" || password == "Never Gonna Give You Up!") {
    game.splash("LOGIN SUCCESSFUL!")
} else {
    game.splash("LOGIN FAILURE!")
}
