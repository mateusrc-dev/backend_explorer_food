const { Router } = require("express")
const usersRouter = require("./users.routes")
const dishesRouter = require("./dishes.routes")
const drinksRouter = require("./drinks.routes")
const dessertsRouter = require("./desserts.routes")
const requestRouter = require("./request.routes")
const allRequestsRouter = require("./allRequests.routes")
const favoritesDishesRouter = require("./favoritesDishes.routes")
const favoritesDrinksRouter = require("./favoritesDrinks.routes")
const favoritesDessertsRouter = require("./favoritesDesserts.routes")

const routes = Router()

routes.use("/users", usersRouter)
routes.use("/dishes", dishesRouter)
routes.use("/drinks", drinksRouter)
routes.use("/desserts", dessertsRouter)
routes.use("/request", requestRouter)
routes.use("/favoritesdishes", favoritesDishesRouter)
routes.use("/favoritesdrinks", favoritesDrinksRouter)
routes.use("/favoritesdesserts", favoritesDessertsRouter)
routes.use("/allrequests", allRequestsRouter)

module.exports = routes