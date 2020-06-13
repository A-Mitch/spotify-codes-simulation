const path = require('path');
const  express = require('express');

const app = express();

// app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function(req,res) {
    res.sendFile('index.html', {root: path.join(__dirname, '/')});
})

const port = 8080
app.listen(port);

console.log('server on http://localhost:' + port);