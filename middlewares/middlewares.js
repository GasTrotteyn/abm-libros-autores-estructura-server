let autores = require('../autores.json');

function estaAutor(req, res, next) {
    const idAutor = parseInt(req.params.id);
    let autor = autores.find(element => element.id === idAutor);
    if (autor) {
        req.autorEncontrado = autor;
        next();
    };
    res.status(404).send(`autor inexistente`);
}

function estaLibro(req, res, next) {
    const libros = req.autorEncontrado.libros;
    let libroRequerido = parseInt(req.params.idLibro);
    console.log(req.params.idLibro);
    const libro = libros.find(obra => obra.id === libroRequerido);
    if (libro) {
        req.libroEncontrado = libro;
        next();
    };
    res.status(404).send(`libro inexistente`);
}

module.exports={
    estaAutor,
    estaLibro,
}