import { Database } from './database.js'
import { randomUUID } from 'node:crypto'

const database = new Database()

export const routes = [
    {
        method: 'POST',
        path: '/tasks',
        handler: (req, res) => {
            const { title, description } = req.body
            const createdAt = new Date();

            const task = {
                id: randomUUID(),
                title,
                description,
                completed_at: 'null',
                created_at: createdAt,
                updated_at: createdAt
            }

            database.insert('tasks', task)

            return res.writeHead(201).end()
        }
    },
    {
        method: 'GET',
        path: '/tasks',
        handler: (req, res) => {
            const tasks = database.select('tasks')

            return res.end(JSON.stringify(tasks))
        }
    },
]