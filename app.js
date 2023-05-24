// Importation des modules necessaires
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/router');

// Initialisation du port d'écoute
const port = 3000;

// Initialisation de express
const app = express();

// Utilisation de body-parser comme middleware
app.use(bodyParser.json()); // Pour le parsage des données JSON
app.use(bodyParser.urlencoded({ extended: true })); // Pour le parsage des données URL-encoded

// Utilisation de notre router pour les routes de notre API
app.use(router);

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});