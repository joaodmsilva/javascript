const express = require('express'); // criar um servidor para nos mostrar o que estamos a fazer
const app = express();// o express vai pegar tudo que estamos a fazer e mostra no navegador


app.set('view engine', 'ejs'); // vamos usar o ejs para rendarizar o html

app.get('/', (req, res) => {  // criar a rota e criar a resposta de rendering
    const items = [
        {
            title: "F",
            message: "azer aplicações/serviços de forma fácil",
        },
        {
            title: "I",
            message: "ncluir/usar javascript no EJS para renderizar HTML",
        },
        {
            title: "X",
            message: "EROX é uma impressora",
        },
        {
            title: "E",
            message: "js usa JavaScript para renderizar HTML",
        },
    ];

    const subtitle = "Uma linguagem de modelação para criação de pagina HTML"
    
    res.render('pages/index',{
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get('/sobre', (req, res) => {
    res.render('pages/about');
})

app.listen(8080);
console.log('----- Servidor Online -----')