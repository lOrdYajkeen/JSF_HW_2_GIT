// Для начала установим зависимости.
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    // Сообщение при коннекте к адресу
    console.log('Server request');
    // Сообщение о методе при коннекте
    console.log(req.url, req.method);

    // для разметки страницы под html используется Content-Type = text/html
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<h1>Hello world!</h1>');
    // res.write('<p>My name is Alex</p>');

    // для разметки страницы под JSON используется Content-Type = application/json
    res.setHeader('Content-Type', 'application/json');
    const data = JSON.stringify([
        {name: 'Ivan', age: 10},
        {name: 'Alex', age: 12}
    ])

    // для сообщения серверу, что мы сделали все, что хотели
    res.end(data);
});

server.listen(port, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${port}`);
});