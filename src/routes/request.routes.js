const { Router } = require("express")
const RequestController = require("../Controllers/RequestController")
const requestController = new RequestController()
const requestRoutes = Router()

requestRoutes.post("/:user_id", requestController.create)
requestRoutes.get("/:id", requestController.show)
requestRoutes.get("/", requestController.index)
requestRoutes.delete("/:id", requestController.delete)

module.exports = requestRoutes