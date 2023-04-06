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
        req.role = decoded.role;
        next();
    });
}

// middelewear to check if the user is a admin
function admin(req, res, next) {
    if (req.role === "admin") {
        next();
    } else {
        return res.status(401).send({ error: 'Unauthorized' });
    }
}

// middelewear to check if the user is a teacher
function teacher(req, res, next) {
    if (req.role === "teacher") {
        next();
    } else {
        return res.status(401).send({ error: 'Unauthorized' });
    }
}

// middelewear to check if the user is a student
function student(req, res, next) {
    if (req.role === "student") {
        next();
    } else {
        return res.status(401).send({ error: 'Unauthorized' });
    }
}

// middelewear to check if the user is a godAdmin
function godAdmin(req, res, next) {
    if (req.role === "godAdmin") {
        next();
    } else {
        return res.status(401).send({ error: 'Unauthorized' });
    }
}




module.exports = { auth, admin, teacher, student, godAdmin };