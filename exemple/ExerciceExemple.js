const express = require('express');
const app = express();
const cors = require('cors');
const port = 80;

app.use(cors()); // Permet l’accès à tous le monde

app.get('/ExoDemo_simpleCall', (req, res) => {
    // Je construit ma réponse
    const response = {
        message: "Ceci est un réponse du server Express.js!"
    };

    // J'envoie ma réponse
    res.json(response);
});

app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});
