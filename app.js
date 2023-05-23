// Importation des modules necessaires
const express = require('express');

// Initialisation de express
const app = express();

// Initialisation du port d'écoute
const port = 3000;

app.get('/', (req, res) => {
    res.send("Bienvenue sur la page d'accueil");
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});