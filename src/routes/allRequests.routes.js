const { Router } = require("express")
const AllRequestsController = require("../Controllers/AllRequestsController")
const allRequestsController = new AllRequestsController()
const allRequestsRoutes = Router()

allRequestsRoutes.post("/:user_id", allRequestsController.create)

allRequestsRoutes.get("/", allRequestsController.index)
allRequestsRoutes.delete("/:id", allRequestsController.delete)
allRequestsRoutes.put("/", allRequestsController.update)

module.exports = allRequestsRoutes