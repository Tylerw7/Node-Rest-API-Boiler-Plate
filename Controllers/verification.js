const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyTokenAuth = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]

    if (!token) {
        return res.status(403).json({ error: 'No token provided, access denied' });
    }

    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        // Attach the user info to the request object
        req.user = { id: user.id };
        console.log(`verify ${req.user.id}`);
        next();  // Proceed to the next middleware or route handler
    });
};

module.exports = verifyTokenAuth;
