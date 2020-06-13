// Imports express and path ~ allows utilities for working with files and directory paths
const  express = require('express');
const path = require('path');

const app = express();

// static resolves to public
app.use('/static', express.static('public'))

// Gets the index.html page
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '/index.html'))
})

// Where are we listening for the app
const port = 8080
app.listen(port);

console.log(`Server running on http://localhost:${port}. Check it out! `);