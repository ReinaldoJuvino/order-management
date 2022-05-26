module.exports = {
    dev: {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_MIGRATION_HOST,
        "port": process.env.DB_PORT,
        "dialect": "postgres",
        "seederStorage": "sequelize"
    }
};