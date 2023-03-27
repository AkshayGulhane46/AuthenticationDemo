const { serializeUser } = require('passport');
const passport = require('passport');
const User = require('../models/user');

const LocalStratergy = require('passport-local').Strategy;
// Authentication using passport 

passport.use(new LocalStratergy({
    usernameField: 'email',
    passReqToCallback: true 
},
async function(req, email, password, done){
    // find a user and establish the identity
    let user = await User.findOne({email: email})
        if (!user){
            console.log('Error in finding user --> Passport');
            return done(user);
        }

        if (!user || user.password != password){
            console.log('Invalid Username/Password');
            req.flash('error','invalid Password Entered'); // to pass this messages a custom middleware for flash is created
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


// check if user is authenticated

passport.checkAuthentication = function(req,res,next){
    // if the user is signd in then passed on the request to the next function (controller action)
    if(req.isAuthenticated()){
        return next();
    }
    // if user is not signed in 
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie and we are just sending this to locals for the views 
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;