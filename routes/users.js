const User = require('../models/user');

module.exports = (router) => {

    router.post('/createUser', (req, res) => {
        res.send('Test');
    });
    
    return router;
}