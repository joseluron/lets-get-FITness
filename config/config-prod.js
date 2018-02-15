const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://jlcc:jlcc@ds237808.mlab.com:37808/lets-get-fitness',
    secret: crypto,
    db: 'lets-get-FITness'
}