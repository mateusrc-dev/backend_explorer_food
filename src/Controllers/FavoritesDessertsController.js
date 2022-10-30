const knex = require("../database/knex")

class favoritesDessertsController {
  async create(request, response) {
    const { dessert_id } = request.body
    const user_id = request.user.id
    //const { user_id } = request.params
    await knex("favoritesDesserts").insert({ dessert_id, user_id })
    response.json()
  }
  
  async delete(request, response) {
    const { id } = request.params
    await knex("favoritesDesserts").where({ id }).delete()
    return response.json()
  }
  async index(request, response) {
    //const { user_id } = request.query
    const user_id = request.user.id
    const favoritesDesserts = await knex("favoritesDesserts").where({ user_id }).select(["desserts.id", "desserts.name", "desserts.image", "desserts.price", "desserts.description"]).innerJoin("desserts", "desserts.id", "favoritesDesserts.dessert_id").orderBy("desserts.name")
    return response.json({ favoritesDesserts })
  }
}

module.exports = favoritesDessertsController