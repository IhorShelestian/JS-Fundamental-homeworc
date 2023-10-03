const express = require('express');
const cors = require('cors');
const date = new Date();
const result = `Your vote is accepted: ${date}`;
const port = 5000;
const ip = 'localhost';

app = express();

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.status(200).type('text').send(result);
});

app.use((req, res, next) => {
    res.status(404).type('text').send("Page Not Found!");
});

app.listen(port, ip, () => {
    console.log('Server runing..');
});