const jwt = require('jsonwebtoken');


function auth(req, res, next) {
    const accessToken = req.body.token;
   
    if (!accessToken) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    jwt.verify(accessToken, "secret", (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: 'Unauthorized' });
        }

        req.userId = decoded.id; // Use the _id claim instead of the userId claim
        req.admin = decoded.isAdmin;
        next();
    });
}


module.exports = auth;