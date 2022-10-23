const { Router } = require("express")
const FavoritesDishesController = require("../Controllers/FavoritesDishesController")
const favoritesDishesController = new FavoritesDishesController()
const favoritesDishesRoutes = Router()

favoritesDishesRoutes.post("/:user_id", favoritesDishesController.create)
favoritesDishesRoutes.get("/", favoritesDishesController.index)
favoritesDishesRoutes.delete("/:id", favoritesDishesController.delete)

module.exports = favoritesDishesRoutes 