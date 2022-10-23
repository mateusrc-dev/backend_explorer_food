const { Router } = require("express")
const FavoritesDessertsController = require("../Controllers/FavoritesDessertsController")
const favoritesDessertsController = new FavoritesDessertsController()
const favoritesDessertsRoutes = Router()

favoritesDessertsRoutes.post("/:user_id", favoritesDessertsController.create)
favoritesDessertsRoutes.get("/", favoritesDessertsController.index)
favoritesDessertsRoutes.delete("/:id", favoritesDessertsController.delete)

module.exports = favoritesDessertsRoutes 