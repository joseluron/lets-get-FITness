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

    router.get('/getAllRoutinesByLikes', (req, res) => {
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
        }).sort({ 'likes': -1 });
    });

    router.get('/getAllUserRoutines', (req, res) => {
        User.findOne({ _id: req.decodedToken.userId }, (err, user) => {
            if (err) {
                res.json({ success: false, message: err });
            } else {
                if (!user) {
                    res.json({ success: false, message: 'No es posible autenticar al usuario' });
                } else {
                    Routine.find({ createdBy: user.username }, (err, routines) => {
                        if (err) {
                            res.json({ success: false, message: err });
                        } else {
                            if (!routines.length) {
                                res.json({ success: true, hasRoutines: false, message: 'No ha creado ninguna rutina' });
                            } else {
                                res.json({ success: true, hasRoutines: true, routines: routines });
                            }
                        }
                    });
                }
            }
        });
    });

    router.get('/getRoutine/:id', (req, res) => {
        if(!req.params.id) {
            res.json({ success: false, message: 'No se ha facilitado un ID de rutina' });
        } else {
            Routine.findOne({ _id: req.params.id}, (err, routine) => {
                if(err) {
                    res.json({ success: false, message: 'ID de rutina no valida' });
                } else {
                    if(!routine) {
                        res.json({ success: false, message: 'No se ha encontrado ninguna rutina' });
                    } else {
                        res.json({ success: true, routine: routine });
                    }
                }
            });
        }
    });
    
    router.get('/getRoutineToEdit/:id', (req, res) => {
        if(!req.params.id) {
            res.json({ success: false, message: 'No se ha facilitado un ID de rutina' });
        } else {
            Routine.findOne({ _id: req.params.id}, (err, routine) => {
                if(err) {
                    res.json({ success: false, message: 'ID de rutina no valido' });
                } else {
                    if(!routine) {
                        res.json({ success: false, message: 'No se ha encontrado ninguna rutina' });
                    } else {
                        User.findOne({ _id: req.decodedToken.userId }, (err, user) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                if (!user) {
                                    res.json({ success: false, message: 'No es posible autenticar al usuario' });
                                } else {
                                    if (user.username != routine.createdBy) {
                                        res.json({ success: false, message: 'No tiene permisos para ver esta página' });
                                    } else {
                                        res.json({ success: true, routine: routine });
                                    }
                                }
                            }
                        });
                    }
                }
            });
        }
    });

    router.put('/editRoutine', (req, res) => {
        if (!req.body._id) {
            res.json({ success: false, message: 'No se ha facilitado un ID de rutina' });
        } else {
            Routine.findOne({ _id: req.body._id }, (err, routine) => {
                if (err) {
                    res.json({ success: false, message: 'ID de rutina no válido' });
                } else {
                    if (!routine) {
                        res.json({ success: false, message: 'Rutina no encontrada'});
                    } else {
                        User.findOne({_id: req.decodedToken.userId}, (err, user) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                if (!user) {
                                    res.json({ success: false, message: 'No es posible autenticar al usuario' });
                                } else {
                                    if (user.username != routine.createdBy) {
                                        res.json({ success: false, message: 'No tiene permisos para editar esta rutina' });
                                    } else {
                                        routine.title = req.body.title;
                                        routine.description = req.body.description;
                                        routine.body = req.body.body;
                                        routine.save((err) => {
                                            if (err) {
                                                res.json({ success: false, message: err });
                                            } else {
                                                res.json({ success: true, message: 'Rutina editada correctamente' });
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }
                }
            })
        }
    });

    router.delete('/deleteRoutine/:id', (req, res) => {
        if (!req.params.id) {
            res.json({ success: false, message: 'No se ha facilitado un ID de rutina' });
        } else {
            Routine.findOne({ _id: req.params.id }, (err, routine) => {
                if (err) {
                    res.json({ success: false, message: 'ID de rutina no válido' });
                } else {
                    if (!routine) {
                        res.json({ success: false, message: 'Rutina no encontrada' });
                    } else {
                        User.findOne({ _id: req.decodedToken.userId }, (err, user) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                if (!user) {
                                    res.json({ success: false, message: 'No es posible autenticar al usuario' });
                                } else {
                                    if (user.username !== routine.createdBy) {
                                        res.json({ success: false, message: 'No tiene permisos para eliminar esta rutina' });
                                    } else {
                                        routine.remove((err) => {
                                            if (err) {
                                                res.json({ success: false, message: err });
                                            } else {
                                                res.json({ success: true, message: 'Rutina eliminada con éxito!' });
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }
                }
            });
        }
    });

    router.put('/likeRoutine', (req, res) => {
        if (!req.body._id) {
            res.json({ success: false, message: 'No se ha facilitado un ID de rutina' });
        } else {
            Routine.findOne({ _id: req.body._id }, (err, routine) => {
                if (err) {
                    res.json({ success: false, message: 'ID de rutina no válido' });
                } else {
                    if (!routine) {
                        res.json({ success: false, message: 'Rutina no encontrada' });
                    } else {
                        User.findOne({ _id: req.decodedToken.userId }, (err, user) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                if (!user) {
                                    res.json({ success: false, message: 'No es posible autenticar al usuario' });
                                } else {
                                    if (user.username === routine.createdBy) {
                                        res.json({ success: false, message: 'No puede dar like a su propia rutina' });
                                    } else {
                                        if (routine.likedBy.includes(user.username)) {
                                            routine.likes--;
                                            let userIndex = routine.likedBy.indexOf(user.username);
                                            routine.likedBy.splice(userIndex, 1);
                                            routine.save((err) => {
                                                if (err) {
                                                    res.json({ success: false, message: err });
                                                } else {
                                                    res.json({ success: true, message: 'Su Like se ha eliminado con éxito' });
                                                }
                                            });
                                        } else {
                                            routine.likes++;
                                            routine.likedBy.push(user.username);
                                            routine.save((err) => {
                                                if (err) {
                                                    res.json({ success: false, message: err });
                                                } else {
                                                    res.json({ success: true, message: 'Like recibido con éxito' });
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
            });
        }
    });

    router.post('/createComment', (req, res) => {
        if (!req.body.comment) {
            res.json({ success: false, message: 'No se ha facilitado ningún comentario' });
        } else {
            if (!req.body._id) {
                res.json({ success: false, message: 'No se ha facilitiado ningún ID de rutina' });
            } else {
                Routine.findOne({ _id: req.body._id }, (err, routine) => {
                    if (err) {
                        res.json({ success: false, message: 'ID de rutina no válido' });
                    } else {
                        if (!routine) {
                            res.json({ success: false, message: 'Rutina no encontrada' });
                        } else {
                            User.findOne({ _id: req.decodedToken.userId }, (err, user) => {
                                if (err) {
                                    res.json({ success: false, message: err });
                                } else {
                                    if (!user) {
                                        res.json({ success: false, message: 'Usuario no encontrado' });
                                    } else {
                                        routine.comments.push({
                                            comment: req.body.comment,
                                            commentator: user.username
                                        });
                                        routine.save((err) => {
                                            if (err) {
                                                if (err.errors) {
                                                    res.json({ success: false, message: 'El comentario debe tener un mínimo de 1 caracter pero un máximo de 120' });
                                                } else {
                                                    res.json({ success: false, message: 'No se ha podido crear el comentario. Error: ', err });
                                                }
                                            } else {
                                                res.json({ success: true, message: 'Comentario creado con éxito!' });
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    });

    return router;
}