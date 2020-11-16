import { verify } from 'jsonwebtoken';
import { jwtConfig } from '../config/jwtConfig';

const verifyToken = (req, res, next) => {
    const VALIDATION_TOKEN = "VALIDATION_TOKEN";

    try {
        let token = req.headers['authorization'];

        if (!token) {
            throw {
                code: VALIDATION_TOKEN,
                field: 'token',
                message: 'Missing authentication token'
            }
        }

        verify(token, jwtConfig.secretKey, (err) => {
            if (err) {
                console.log(err);
                throw {
                    code: VALIDATION_TOKEN,
                    field: 'token',
                    message: 'Invalid authentication token.'
                };
            }
            next();
        })

    } catch (error) {
        return res.status(401).json(error);
    }
}

module.exports = {
    verifyToken
};