import UtilServices from '../services/util.service';
import { sign } from 'jsonwebtoken';
import { jwtConfig } from '../config/jwtConfig';

export async function login(req, res) {
    const VALIDATION_EMPTY = 'VALIDATIONS_EMPTY';
    const VALIDATION_LOGIN = 'VALIDATIONS_LOGIN';

    if (!req.body.user) {
        res.status(403).json({
            error: VALIDATION_EMPTY,
            message: `User can't be empty`
        })
    }

    if (!req.body.password) {
        res.status(403).json({
            error: VALIDATION_EMPTY,
            message: `Password can't be empty`
        })
    }

    try {
        let token = _getSignedPayload({ id: req.body.email });
        res.status(200).json({
            'user': req.body.user,
            'token': token
        });
    } catch (error) {
        console.log(error);
        res.status(403).json({
            error: VALIDATION_LOGIN,
            message: 'Email or Password are wrong'
        })
    }
}

function _getSignedPayload(payload) {
    return sign(payload, jwtConfig.secretKey, { expiresIn: jwtConfig.expiresIn });
}