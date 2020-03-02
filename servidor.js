var http = require('http'),
    fs = require('fs');
    port = 3000;
    ip = 'localhost';

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(port, ip, () => {
        console.log(`Servidor rodando em http://${ip}:${port}`)
        console.log('Para derrubar o servidor: ctrl + c');
    })


});