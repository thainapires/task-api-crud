# 📝 Tasks API

This is the first challenge of node.js of the Ignite Course from Rocketseat. 

It consists in a simple API that manages tasks (Create, Register, Update and Delete). Also, there's a functionality that imports tasks from a CSV file. The API is made with pure node.js, not using any frameworks, with the aim of learning the basics and some things that frameworks do behind the scenes.

![](https://github.com/thainapires/task-api-crud/blob/main/ezgif-4-04ac562a7d.gif?raw=true)

# 📌 Usage

If you want to test the API, you can follow these steps:

1. Clone the repository
2. Run ```npm i``` to install the csv-parser
3. Run ```npm run dev``` to start the server

# 📌 Tasks fields and Routes

## 📂 Fields

The structure of a Task in the database is as it follows:

- `id` - Unique identifier for each task.
- `title` - Title of the task.
- `description` - Description of the task.
- `completed_at` - Date the task was completed. The initial value is `null`.
- `created_at` - Date the task was created.
- `updated_at` - Date the task was updated.

## 🔗 Routes:

<details>
<summary> POST - /tasks </summary>
  Route to create a task. Send the fields `title` and `description` in the body of the request as a json.
</details>

<details>
<summary> `GET - /tasks` </summary>
  Route to list all the tasks in the database. 
</details>

<details>
<summary> `PUT - /tasks/:id` </summary>
  Route to update a task by id. In the body of the request, send the field `title` and/or `description`.  Also, send the id as a route parameter.
</details>

<details>
<summary> DELETE - /tasks/:id </summary>
  Route to delete a task by id. 
</details>

<details>
<summary> `PATCH - /tasks/:id/complete` </summary>
  Route to mark a task as complete. 
</details>

# 📥 Import tasks via csv

To import tasks via csv, run ```node src/import_CSV/import.js``` in the route directory.
