const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;

const User = require('../models/user');

const accessSecret = process.env.ACCESS_TOKEN_SECRET;

var cookieExtractor = function (req) {
    var token = null;
    if (req && req.cookies) {
        token = req.cookies.jwt;
    }
    return token;
};

const accessOptions = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: accessSecret,
};

passport.use(
    'access',
    new JwtStrategy(accessOptions, async (jwt_payload, done) => {
        try {
            const user = await User.findOne({ _id: jwt_payload.user_id });

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (err) {
            return done(err, false);
        }
    })
);

module.exports = passport;