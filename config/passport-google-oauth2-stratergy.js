// const passport = require('passport');
// const googleStratergy = require('passport-google-oauth').OAuth2Strategy;
// const crypto = require('crypto')
// const User = require('../models/user');

// passport.use(new googleStratergy({
//         clientID:"460481636056-ioq7tta6h1c78idnlei1mqpqui3k12l0.apps.googleusercontent.com",
//         clientSecret:"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",
//         callbackURL:"http://localhost:8080/users/auth/google/callback"
//     },
//     function(accessToken,refreshToken,profile,done){
//         // find a user
//         User.findOne({
//             email:profile.emails[0].value
//         }).exec(
//             function(err,user){
//                 if(err){
//                     console.log("error in google stratergy",err);
//                     return;
//                 }
//                 console.log(profile);
//                 console.log(accessToken,refreshToken);
//                 if(user){
//                     // if found set this user as per req.user
//                     return done(null,user);
//                 }else{
//                     // if not found then create the user and set it as req.user
//                     User.create({
//                         name:profile.displayName,
//                         email:profile.emails[0].value,
//                         password:crypto.randomBytes(20).toString('hex')
//                     },function(err,user){
//                         if(err){
//                             console.log("error in creating user",err);
//                             return;
//                         }
//                         return done(null,user);
//                     })
//                 }
//             });
//     }
// ));

// module.exports = passport;



const passport = require('passport');
const googleStratergy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto')
const User = require('../models/user');

passport.use(new googleStratergy({
    clientID: "460481636056-ioq7tta6h1c78idnlei1mqpqui3k12l0.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8080/users/auth/google/callback"
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
