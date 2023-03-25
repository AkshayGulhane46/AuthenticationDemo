const { serializeUser } = require('passport');
const passport = require('passport');
const User = require('../models/user');

const LocalStratergy = require('passport-local').Strategy;
// Authentication using passport 

passport.use(new LocalStratergy({
    usernameField: 'email'
},
async function(email, password, done){
    // find a user and establish the identity
    let user = await User.findOne({email: email})
        if (!user){
            console.log('Error in finding user --> Passport');
            return done(user);
        }

        if (!user || user.password != password){
            console.log('Invalid Username/Password');
            return done(null, false);
        }
        console.log('Userr found in DB');
        return done(null, user);
    }));


// serealize function and desearelize funcion 
passport.serializeUser(function(user,done){
    console.log('inside searleazer')
    done(null,user.id);
})

//desearelize funcion 
passport.deserializeUser(async function(id, done){
    let user = await User.findById(id);
        if(!user){
            console.log('Error in finding user --> Passport');
            return done(err);
        }
        console.log("now you can login");
        return done(null, user);
});



module.exports = passport;