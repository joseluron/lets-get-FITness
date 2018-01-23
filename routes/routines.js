const User = require('../models/user');
const Routine = require('../models/routine');

const jwt = require('jsonwebtoken');
const config = require('../config/config-dev');

module.exports = (router) => {

    router.post('/createRoutine', (req, res) => {
        if (!req.body.title) {
            res.json({ success: false, message: 'Debe introducir un título para la rutina' });
        } else {
            if (!req.body.description) {
                res.json({ success: false, message: 'Debe introducir una breve descripción de la rutina' });
            } else {
                if (!req.body.body) {
                    res.json({ success: false, message: 'Debe introducir una explicación con los ejercicios de la rutina' });
                } else {
                    if (!req.body.createdBy) {
                        res.json({ success: false, message: 'El creador de la rutina tiene que estar indicado' });
                    } else {
                        let routine = new Routine({
                            title: req.body.title,
                            description: req.body.description,
                            body: req.body.body,
                            createdBy: req.body.createdBy
                        });

                        routine.save((err) => {
                            if (err) {
                                if (err.errors) {
                                    if (err.errors.title) {
                                        res.json({ success: false, message: err.errors.title.message });
                                    } else {
                                        if (err.errors.description) {
                                            res.json({ success: false, message: err.errors.description.message });
                                        } else {
                                            if (err.errors.body) {
                                                res.json({ success: false, message: err.errors.body.message });
                                            } else {
                                                res.json({ success: false, message: err.errmsg });
                                            }
                                        }
                                    }
                                } else {
                                    res.json({ success: false, message: 'No se ha podido crear la rutina. Error: ', err });
                                }
                            } else {
                                res.json({ success: true, message: 'Rutina creada correctamente' });
                            }
                        });
                    }
                }
            }
        }
    });

    router.get('/getAllRoutines', (req, res) => {
        Routine.find({}, (err, routines) => {
            if (err) {
                res.json({ success: false, message: err });
            } else {
                if (!routines) {
                    res.json({ success: false, message: 'No se han encontrado rutinas' });
                } else {
                    res.json({ success: true, routines });
                }
            }
        }).sort({ '_id': -1 });
    });

    router.get('/getRoutine/:id', (req, res) => {
        if(!req.params.id) {
            res.json({ success: false, message: 'No se ha facilitado un ID de rutina' });
        } else {
            Routine.findOne({ _id: req.params.id}, (err, routine) => {
                if(err) {
                    res.json({ success: false, message: err });
                } else {
                    if(!routine) {
                        res.json({ success: false, message: 'No se ha encontrado ninguna rurina' });
                    } else {
                        res.json({ success: true, routine: routine });
                    }
                }
            });
        }
    });

    return router;
}