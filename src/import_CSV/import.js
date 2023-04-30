import { parse } from 'csv-parse';
import fs from 'node:fs'

const pathOfFile = new URL('./tasks.csv', import.meta.url)

const csvParse = parse({
    delimiter: ',',
    skipEmptyLines: true,
    fromLine: 2
})

const stream = fs.createReadStream(pathOfFile)
console.log(stream)

async function importTasks(){
    const parse = stream.pipe(csvParse)

    for await (const line of parse) {
        const [title, description] = line;
        await fetch('http://localhost:3335/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                description,
            })
        })
    }
}

importTasks()