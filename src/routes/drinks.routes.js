const { Router } = require("express")
const DrinksController = require("../Controllers/DrinksController")
const drinksController = new DrinksController()
const drinksRoutes = Router()

drinksRoutes.post("/", drinksController.create)
drinksRoutes.get("/:id", drinksController.show)
drinksRoutes.get("/", drinksController.index)
drinksRoutes.delete("/:id", drinksController.delete)

module.exports = drinksRoutes