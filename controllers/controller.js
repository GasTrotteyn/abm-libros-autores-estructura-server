
let autores = require('../autores.json');

function getAutor(req, res) {
    res.json(autores);
};

function getAutorById(req, res) {
    res.json(req.autorEncontrado);
};

function getLibros(req, res) {
    const libros = req.autorEncontrado.libros;
    res.json(libros);
};

function getLibroById(req, res) {
    res.json(req.libroEncontrado);
};

function recibirAutor(req, res) {
    const nuevoAutor = req.body;
    let autor = autores.find(element => element.nombre === nuevoAutor.nombre && element.apellido === nuevoAutor.apellido);
    if (autor) {
        res.status(409).send('ese autor ya existe');
    } else {
        autores.push(nuevoAutor);
        res.status(201).json(nuevoAutor);
    };
}

function recibirLibro(req, res) {
    libroInsertado = req.body;
    let libro = req.autorEncontrado.libros.find(element => element.id === libroInsertado.id)
    if (!libro) {
        req.autorEncontrado.libros.push(libroInsertado);
        res.status(201).send(`listo, ${libroInsertado.titulo} se agregó a ${req.autorEncontrado.nombre}`);
    } res.status(409).send('ese libro ya existe');
}


module.exports = {
    getAutor,
    getAutorById,
    getLibros,
    getLibroById,
    recibirAutor,
    recibirLibro
}
