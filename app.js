const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();

const rutas = require ('./rutas/rutas');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',rutas);

module.exports = app;