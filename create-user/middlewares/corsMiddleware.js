const allowedOrigins = require('../config/allowedOrigins');

module.exports = (req, res, next) => {
    const origin = req.header('Origin');
    if (!origin || allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin || '*');
        next();
    } else {
        res.status(403).send('Not allowed by CORS');
    }
};
