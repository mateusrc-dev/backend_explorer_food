const { Router } = require("express")
const FavoritesDrinksController = require("../Controllers/FavoritesDrinksController")
const favoritesDrinksController = new FavoritesDrinksController()
const favoritesDrinksRoutes = Router()

favoritesDrinksRoutes.post("/:user_id", favoritesDrinksController.create)
favoritesDrinksRoutes.get("/", favoritesDrinksController.index)
favoritesDrinksRoutes.delete("/:id", favoritesDrinksController.delete)

module.exports = favoritesDrinksRoutes 