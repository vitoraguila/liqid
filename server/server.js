const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const surveys = JSON.parse(fs.readFileSync('jsons/surveys.json', 'utf8'));

// ROUTE
app.get('/jsons/surveys', (req, res) => {
    res.send(JSON.stringify(surveys));
});

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});