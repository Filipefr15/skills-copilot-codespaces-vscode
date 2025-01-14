//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Create a variable to store comments
let comments = [];

//GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

//POST /comments
app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.push(comment);
    res.json(comment);
});

//DELETE /comments
app.delete('/comments', (req, res) => {
    comments = [];
    res.json(comments);
});

//Create a server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});