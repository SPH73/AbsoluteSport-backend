const express = require('express');
const port = process.env.PORT || 3001;
// create a const for Airtable?
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// cors middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET,HEAD,OPTIONS,POST,PUT,DELETE',
    ); //USE FETCH API
    res.header(
        'Access-Control-Allow-Headers',
        'auth-token, Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});

//** add airtable as db */

// parse json data
// app.use(express.json());
app.use(bodyParser.json());
// log generator
app.use(morgan('combined'));
// allow clients to access server
app.use(cors());

app.get('/status', (req, res) => {
    res.send({
        message: 'testing web server',
    });
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
