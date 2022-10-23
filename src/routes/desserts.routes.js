const { Router } = require("express")
const DessertsController = require("../Controllers/DessertsController")
const dessertsController = new DessertsController()
const dessertsRoutes = Router()

dessertsRoutes.post("/", dessertsController.create)
dessertsRoutes.get("/:id", dessertsController.show)
dessertsRoutes.get("/", dessertsController.index)
dessertsRoutes.delete("/:id", dessertsController.delete)

module.exports = dessertsRoutes