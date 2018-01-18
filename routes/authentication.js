const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/config-dev');

module.exports = (router) => {

    router.post('/sign-in', (req, res) => {
        if (!req.body.username) {
            res.json({ success: false, message: 'Debe introducir un nombre de usuario' });
        } else {
            if (!req.body.password) {
                res.json({ success: false, message: 'Debe introducir una contraseña' });
            } else {
                User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
                    if (err) {
                        res.json({ success: false, message: err });
                    } else {
                        if (!user) {
                            res.json({ success: false, message: 'Nombre de usuario no encontrado' });
                        } else {
                            const equivalentPasswords = user.comparePasswords(req.body.password);
                            if (!equivalentPasswords) {
                                res.json({ success: false, message: 'Contraseña incorrecta'});
                            } else {
                                const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '24h' });
                                res.json({ success: true, message: 'Usuario identificado corréctamente', token: token, user: { username: user.username } });
                            }
                        }
                    }
                });
            }
        }
    });

    router.use((req, res, next) => {
        const token = req.headers['token'];
        if (!token) {
            res.json({ success: false, message: 'No se ha facilitado un token de autorización' });
        } else {
            jwt.verify(token, config.secret, (err, decodedToken) => {
                if (err) {
                    // res.json({ success: false, message: 'El token ha caducado. ' + err });
                    res.json({ success: false, message: 'Su sesión ha caducado. Por favor, cierre y vuelva a iniciar sesión' });
                } else {
                    req.decodedToken = decodedToken;
                    next();
                }
            });
        }
    });
    
    router.get('/getUserProfile', (req, res) => {
        User.findOne({ _id: req.decodedToken.userId }).select('username email').exec((err, user) => {
            if (err) {
                res.json({ success: false, message: err });
            } else {
                if (!user) {
                    res.json({ success: false, message: 'Usuario no encontrado' });
                } else {
                    res.json({ success: true, user: user });
                }
            }
        });
    });

    return router;
}