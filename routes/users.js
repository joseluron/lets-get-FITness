const User = require('../models/user');

module.exports = (router) => {

    router.post('/createUser', (req, res) => {
        if (!req.body.username) {
            res.json({ success: false, message: 'Debe introducir un nombre de usuario' });
        } else {
            if (!req.body.email) {
                res.json({ success: false, message: 'Debe introducir un correo electrónico' });
            } else {
                if (!req.body.password) {
                    res.json({ success: false, message: 'Debe introducir una contraseña' });
                } else {
                    let user = new User({
                        username: req.body.username.toLowerCase(),
                        email: req.body.email.toLowerCase(),
                        password: req.body.password
                    });
                    user.save((err) => {
                        if (err) {
                            if (err.code === 11000){
                                User.findOne({ username: req.body.username }, (err, user) => {
                                    if (err) {
                                        res.json({ success: false, message: err });
                                    } else {
                                        if (user) {
                                            res.json({ success: false, message: 'Nombre de usuario ya registrado' });
                                        } else {
                                            res.json({ success: false, message: 'Correo electrónico ya registrado' });
                                        }
                                    }
                                });
                            } else {
                                if (err.errors) {
                                    if (err.errors.username) {
                                        res.json({ success: false, message: err.errors.username.message });
                                    } else {
                                        if (err.errors.email) {
                                            res.json({ success: false, message: err.errors.email.message});
                                        } else {
                                            if (err.errors.password) {
                                                res.json({ success: false, message: err.errors.password.message });
                                            } else {
                                                res.json({ success: false, message: err.errmsg });
                                            }
                                        }
                                    }
                                } else {
                                    console.log(err);
                                    res.json({ success: false, message: 'No se ha podido crear el usuario. Error: ', err });
                                }
                            }
                        } else {
                            res.json({ success: true, message: 'Usuario creado correctamente' });
                        }
                    });
                }
            }
        }
    });

    router.get('/checkUsernameAvailability/:username', (req, res) => {
        if (!req.params.username) {
            res.json({ success: false, message: 'Debe facilitar un nombre de usuario' });
        } else {
            User.findOne({ username: req.params.username }, (err, user) => {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    if (user) {
                        res.json({ success: false, message: 'Nombre de usuario ya registrado' });
                    } else {
                        res.json({ success: true, message: 'Nombre de usuario disponible' });
                    }
                }
            });
        }
    });

    router.get('/checkEmailAvailability/:email', (req, res) => {
        if (!req.params.email) {
            res.json({ success: false, message: 'Debe facilitar un correo electrónico' });
        } else {
            User.findOne({ email: req.params.email }, (err, user) => {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    if (user) {
                        res.json({ success: false, message: 'Correo electrónico ya registrado' });
                    } else {
                        res.json({ success: true, message: 'Correo electrónico disponible' });
                    }
                }
            });
        }
    });
    
    return router;
}