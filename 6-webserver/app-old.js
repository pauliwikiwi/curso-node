const http = require('http');

http.createServer((req, res) => {
    /*res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')*/
    /*res.writeHead(200, {'Context-Type':'application/csv'});*/
    res.writeHead(200, {'Context-Type':'application/json'});
    const persona = {
        id: 1,
        nombre: 'Paula'
    }
    res.write(JSON.stringify(persona));
    res.end();
}).listen(8080);

console.log('escuchando el puerto', 8080);