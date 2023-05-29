// Import des modules necessaires au fonctionnement
const express = require('express');

// Import des controllers


// Initialisation de notre router
const router = express.Router();

// ROUTES PUBLIC
// Routes homepage
router.get('/', (req, res) => {
    res.send("Bienvenue sur la page d'accueil géré depuis le router");
});


// ROUTES ADMIN
// Routes Infos perso

// Routes Expériences

// Routes Projets

// Routes Technos / Langages

module.exports = router;