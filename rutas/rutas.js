const express = require ('express');
const controllers = require('../controllers/controller');

const api = express.Router();

api.get('/autores', controllers.getAutor);

module.expoprts = api;