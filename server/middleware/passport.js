const { User } = require('../models/user');
require('dotenv').config();

const { Strategy:JwtStrategy, ExtractJwt } = require('passport-jwt');

const jwtOptions = {
    secretOrKey: process.env.DB_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const jwtVerify = async(payload, done) => {

    try {
        const user = await User.findById(payload.sub);
        if (!user) {
            // done this callback(err, dont have error)
            return done(null, false)
        }
        // good uesr no error
        done(null, user)
    } catch(error) {
        // get error server error
        done(error, false)
    }
}




const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);


module.exports = {
    jwtStrategy
}