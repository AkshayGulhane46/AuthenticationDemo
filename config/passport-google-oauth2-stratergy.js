const passport = require('passport');
const googleStratergy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto')
const User = require('../models/user');
const env = require('./environment');


passport.use(new googleStratergy({
    clientID: env.google_client_ID,
    clientSecret: env.google_client_Secret,
    callbackURL: env.google_callback_URL
},
    async function (accessToken, refreshToken, profile, done) {
        // find a user
        await User.findOne({
            email: profile.emails[0].value
        }).then((user) => {
            console.log(profile);
            console.log(accessToken, refreshToken);
            if (user) {
                // if found set this user as per req.user
                return done(null, user);
            } else {
                // if not found then create the user and set it as req.user
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                }, function (err, user) {
                    if (err) {
                        console.log("error in creating user", err);
                        return;
                    }
                    return done(null, user);
                })
            }
        }).catch((err) => {
            if (err) {
                console.log("error in google stratergy", err);
                return;
            }
        })
    }
));

module.exports = passport;
