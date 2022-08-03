const express = require('express');
const  hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//HandleBars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/components');
// Servir contenido éstatico
app.use(express.static('public'));

//usando la linea anterior, nunca se meterá en esta ruta
/*app.get('/',(req, res) => {
    res.send('Home page')
});*/
app.get('/', (req, res) =>{
    res.render('home', {
        nombre: 'Paulis',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) =>{
    /*res.sendFile(__dirname + '/public/generic.html')*/
    res.render('generic', {
        nombre: 'Paulis',
        titulo: 'Curso de Node'
    });
});
app.get('/elements', (req, res) =>{
    //res.sendFile(__dirname + '/public/elements.hbs.html')
    res.render('elements', {
        nombre: 'Paulis',
        titulo: 'Curso de Node'
    });

});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})