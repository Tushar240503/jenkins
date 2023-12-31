const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    res.send(`Hello, ${name}! Your name has been submitted.`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
