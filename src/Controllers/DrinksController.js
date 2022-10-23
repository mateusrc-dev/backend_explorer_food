const knex = require("../database/knex")

class DrinksController {
  async create(request, response) {
    const { name, description, price, ingredients } = request.body
    const drink_id = await knex("drinks").insert({ name, description, price })
    const ingredientsInsert = ingredients.map(name => {
      return {
        drink_id,
        name
      }
    })
    await knex("ingredientsDrinks").insert(ingredientsInsert)
    response.json()
  }
  async show(request, response) {
    const { id } = request.params
    const drinks = await knex("drinks").where({ id }).first()
    const ingredients = await knex("ingredientsDrinks").where({ drink_id: id }).orderBy("name")
    return response.json({ ...drinks, ingredients })
  }
  async delete(request, response) {
    const { id } = request.params
    await knex("drinks").where({ id }).delete()
    return response.json()
  }
  async index(request, response) {
    const { name } = request.query
    const drinks = await knex("drinks").whereLike("name", `%${name}%`).orderBy("name")
    return response.json({ drinks })
  }
}

module.exports = DrinksController