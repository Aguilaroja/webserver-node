const express = require('express');
const app = express();
const hbs = require('hbs');

//Sirve para mostrar una página HTML
app.use(express.static(__dirname + '/public'));
//Para especificar en la URL un archivo diferente, en la URL se debe escribir con todo y extensión del archivo

//Express HBS (Handlebars) engine
hbs.registerPartials(__dirname + '/views/partials'); //Las carpetas deben estar escritas en inglés
app.set('view engine', 'hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'Emmanuel',
        anio: new Date().getFullYear()
    });
});

app.get('/about', function(req, res) {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

//Los siguiente sirve para poder enviar datos desde una petición externa
// app.get('/', function(req, res) {
//     // res.send('Hello World');
//     let salida = {
//         nombre: 'Emmanuel',
//         edad: 30,
//         url: req.url
//     };
//     res.send(salida);
// });

//Sirve para especificar en la URL lo que quiere obtener
// app.get('/data', (req, res) => {
//     res.send('Hola data');
// });

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});