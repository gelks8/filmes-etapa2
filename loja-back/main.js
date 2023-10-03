require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//criando servidor
const app = express();

//configurando servidor web
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//conectando controllers ao server web
app.use('/filmes', require('./controllers/filme_controller'));

console.log('Conectando ao banco de dados...');
mongoose.connect(process.env.URL_BANCO_DE_DADOS).then(() => {

    console.log('Conectado ao banco de dados com sucesso!');
    app.listen(parseInt(process.env.PORTA_SERVIDOR), () => {
        console.log(`O servidor está no ar em http://localhost:${process.env.PORTA_SERVIDOR}`);
    });

});

// app.get('/', (req, res) => {
//     res.send('Bem vindos à minha aplicação');
// });

// app.get('/test', (req, res) =>{
//     res.send('Isso é um teste');
// });

