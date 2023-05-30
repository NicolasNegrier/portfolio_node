const { Client } = require('pg');

const database = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
    

database.connect((error) => {
    if (error) {
    console.error("Une erreur a lieu à la connexion avec notre BDD : ", error.message);
    } else {
    console.log("Connection à la BDD réussie !");
    }
    });

module.exports = database;