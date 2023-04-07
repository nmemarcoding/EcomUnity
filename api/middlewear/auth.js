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
        req.school = decoded.school;
        next();
    });
}

// middelewear to check if the user is a admin
function admin(req, res, next) {
    const accessToken = req.body.token;
    if (!accessToken) {
        return res.status(401).send({ error: 'Unauthorized' });
    }
    
    jwt.verify(accessToken,"secret", (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: 'Unauthorized' });
        }
        if (decoded.role !== "admin") {
            return res.status(401).send({ error: 'Unauthorized' });
        }
        req.userId = decoded.id; // Use the _id claim instead of the userId claim
        req.role = decoded.role;
        req.school = decoded.school;
        next();
    });
}

// middelewear to check if the user is a teacher
function teacher(req, res, next) {
    const accessToken = req.body.token;
    if (!accessToken) {
        return res.status(401).send({ error: 'Unauthorized' });
    }
    jwt.verify(accessToken,"secret", (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: 'Unauthorized' });
        }
        if (decoded.role !== "teacher") {
            return res.status(401).send({ error: 'Unauthorized' });
        }
      
        req.userId = decoded.id; // Use the _id claim instead of the userId claim
        req.role = decoded.role;
        req.school = decoded.school;
        next();
    });
}

// middelewear to check if the user is a student
function student(req, res, next) {
    const accessToken = req.body.token;
    if (!accessToken) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    jwt.verify(accessToken,"secret", (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: 'Unauthorized' });
        }
        if (decoded.role !== "student") {
            return res.status(401).send({ error: 'Unauthorized' });
        }
        req.userId = decoded.id; // Use the _id claim instead of the userId claim
        req.role = decoded.role;
        req.school = decoded.school;
        next();
    });
}

// middelewear to check if the user is a godAdmin
function godAdmin(req, res, next) {
    const accessToken = req.body.token;
    if (!accessToken) {
        return res.status(401).send({ error: 'Unauthorized' });
    }
    jwt.verify(accessToken,"secret", (err, decoded) => {
       
        if (err) {
            return res.status(401).send({ error: 'Unauthorized' });
        }
        if (decoded.role !== "godAdmin") {
            return res.status(401).send({ error: 'Unauthorized' });
        }
        req.userId = decoded.id; // Use the _id claim instead of the userId claim
        req.role = decoded.role;
        next();
    });
}






module.exports = { auth, admin, teacher, student, godAdmin };