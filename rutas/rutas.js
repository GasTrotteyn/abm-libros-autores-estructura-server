const express = require ('express');
const controllers = require('../controllers/controller');
const middlewares = require('../middlewares/middlewares');
const api = express.Router();

api.get('/autores', controllers.getAutor);
api.get('/autores/:id', middlewares.estaAutor, controllers.getAutorById);
api.get('/autores/:id/libros', middlewares.estaAutor, controllers.getLibros);
api.get('/autores/:id/libros/:idLibro', middlewares.estaAutor, middlewares.estaLibro, controllers.getLibroById);
api.post('/autores', controllers.recibirAutor);
api.post('/autores/:id/libros', middlewares.estaAutor, controllers.recibirLibro);
module.exports = api;