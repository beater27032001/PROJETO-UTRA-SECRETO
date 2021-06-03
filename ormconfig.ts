export default {
    "type": "mysql",
    "database": "animeflix",
    "synchronize": false,
    "logging": false,
    "host": process.env.DB_HOST,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "migrations": [
        "./src/database/migrations/**.{js,ts}"
    ],
    "entities": [
        "./src/models/**.{js,ts}" // "./src/models/**.{js,ts}
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}
