const express = require('express');
const app = express();
const router = express.Router();

const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const config = require('./config/config-dev');
const users = require('./routes/users')(router);

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err) {
        console.log('Imposible conectarse a la base de datos: ', err);
    } else {
        console.log('Conectado a la base de datos ' + config.db + " correctamente");
    }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/client/dist/'));
app.use('/users', users);

app.get('*', (req, res) => {
    res.send('<h1>Hello World!</h1>');
    // res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});
  
app.listen(8080, () => {
    console.log('Servidor funcionando en el puerto 8080');
});