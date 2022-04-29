var jwt = require('jsonwebtoken');
const JWT_SECRET = 'MayankISagood$boy';

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to request object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data
        next()
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
}

module.exports = fetchuser;