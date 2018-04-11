const express = require('express');
const app = express();
const router = express.Router();

const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8080;

const config = require('./config/config-dev');
const users = require('./routes/users')(router);
const authentication = require('./routes/authentication')(router);
const routines = require('./routes/routines')(router);

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err) {
        console.log('Imposible conectarse a la base de datos: ', err);
    } else {
        console.log('Conectado a la base de datos ' + config.db + " correctamente");
    }
});

app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/users', users);
app.use('/authentication', authentication);
app.use('/routines', routines);

app.get('*', (req, res) => {
    // res.send('<h1>Hello World!</h1>');
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
  
app.listen(port, () => {
    console.log('Servidor funcionando en el puerto', + port);
});