const knex = require("../database/knex")
const sqliteConnection = require("../database/sqlite")

class AllRequestsController {
  async create(request, response) {
    const { details, status } = request.body
    const { user_id } = request.params
    await knex("allRequests").insert({ details, status, user_id })
    return response.json()
  }
  async update(request, response) {
    const { status } = request.body
    const { id } = request.params;
    const database = await sqliteConnection()
    const requests = await database.get("SELECT * FROM allRequests WHERE id = (?)", [id])
    requests.status = status
    await database.run(`
    UPDATE allRequests SET 
    status = ?
    WHERE id = ?`, 
    [requests.status, id])
    return response.json(requests)
  }

  async delete(request, response) {
    const { id } = request.params
    await knex("allRequests").where({ id }).delete()
    return response.json()
  }
  async index(request, response) {
    const { user_id } = request.query
    const allRequests = await knex("allRequests").where({ user_id }).orderBy("details")
    return response.json({ allRequests })
  }
}

module.exports = AllRequestsController