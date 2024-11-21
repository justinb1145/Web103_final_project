import { pool } from './database.js'
import './dotenv.js'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs'

const currentPath = fileURLToPath(import.meta.url)
const chefsFile = fs.readFileSync(path.join(dirname(currentPath), '../config/data/data.json'))
const chefsData = JSON.parse(chefsFile)

const recipesFile = fs.readFileSync(path.join(dirname(currentPath), '../config/data/data.json'))
const recipesData = JSON.parse(recipesFile)

const createChefsTable = async () => {
    const createChefsTableQuery = `
        CREATE TABLE IF NOT EXISTS chefs (
            id serial PRIMARY KEY,
            trip_id int NOT NULL,
            activity varchar(100) NOT NULL,
            num_votes integer DEFAULT 0,
            FOREIGN KEY(trip_id) REFERENCES trips(id)
        );
    `

    try {
        const res = await pool.query(createChefsTableQuery)
        console.log('🎉 chefs table created successfully')
    } catch (err) {
        console.error('⚠️ error creating chefs table', err)
    }
}

const createRecipesTable = async () => {
    const createRecipesTableQuery = `
        CREATE TABLE IF NOT EXISTS recipes (
            id serial PRIMARY KEY,
            trip_id int NOT NULL,
            activity varchar(100) NOT NULL,
            num_votes integer DEFAULT 0,
            FOREIGN KEY(trip_id) REFERENCES trips(id)
        );
    `

    try {
        const res = await pool.query(createRecipesTableQuery)
        console.log('🎉 chefs table created successfully')
    } catch (err) {
        console.error('⚠️ error creating chefs table', err)
    }
}

createChefsTable()
createRecipesTable()
