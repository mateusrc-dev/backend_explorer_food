const { Router } = require("express")
const DishesController = require("../Controllers/DishesController")
const dishesController = new DishesController()
const dishesRoutes = Router()

dishesRoutes.post("/", dishesController.create)
dishesRoutes.get("/:id", dishesController.show)
dishesRoutes.get("/", dishesController.index)
dishesRoutes.delete("/:id", dishesController.delete)

module.exports = dishesRoutes