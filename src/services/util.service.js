import { randomBytes } from 'crypto';
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var UtilServices = {
    generateToken() {
        const bytes = 20;
        return randomBytes(bytes).toString('hex');
    },
    generateHash(password) {
        const salt = 12;
        return bcrypt.hashSync(password, salt);
    },
    comparePasswordHash(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    },
    decodeHash(token) {
        var userDecoded = jwt.decode(token);

        return userDecoded ? userDecoded.id : null;
    }
}

export default UtilServices;