const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://localhost:27017/lets-get-FITness',
    secret: crypto,
    db: 'lets-get-FITness'
}