const express = require('express');
const cors = require('cors');
const fs = require('fs');
const port = 5010;
const ip = 'localhost';

app = express();

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    fs.readFile('books.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(JSON.parse(data))
        }
    })
});

app.use((req, res, next) => {
    res.status(404).type('text').send("Page Not Found!");
});

app.listen(port, ip, () => {
    console.log('Server runing..');
});