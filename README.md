# Back-end part of the Explorer Food application - final challenge of Rocketseat's Explorer course 🚀

### ➡️ The application consists of food delivery, in which the user can create their account, log in, view the available dishes, open the details of a given dish, add the meal and finalize the purchase, being able to choose the quantity of items you want to buy.

### ➡️ The administrator can give feedback to the customer regarding the status of the order (if it is being prepared, if it has been sent...), can create new dishes by adding a photo of the dish, description of the dish, price and can also delete existing dishes, there are graphical interfaces for the admin to make these changes

### In this application we use the following techniques:

- Components
- Back-end migrations
- Creation of interfaces with react-js
- Use of states (useState)
- Use of hooks (useEffect, useRef)
- Use of icons (reaction icons)

### To use the project as a developer, follow these steps:

1. You need to activate the server in both front-end and back-end files with the command "npm run dev"

2. In the end-database part, you can delete the database and after activating the server again with the "npm run dev" command, the database will be created again, but you will also need to use the "npm run migrate" command " to create the migrations (other tables created with this method) that uses knex.

3. To use the application's administrator user, it is important to use insomnia to create a user for the administrator, as there is no location or route in the application to create this administrator user, there are only routes to create accounts for the client in the application - the route to be used in insomnia to create the administrator account is "localhost:3333/adm" and the data needs to be entered in JSON format (see the example below):

{
	"name": "Marcos",
	"email": "marcos@email.com",
	"password": "123456"
}
