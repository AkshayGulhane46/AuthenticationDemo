const { findByIdAndUpdate } = require('../models/user');
const User = require('../models/user');

module.exports.update = async function (req, res) {
    let user = await User.findById(req.query.id);
    if (req.body.currentpassword != user.password) {
        console.log('password didnot match ')
        return res.redirect('back');
    }
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save();
    req.flash('success', 'User Updated please refresh Page');
    return res.redirect('/');
}

module.exports.signUp = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    return res.render('user_sign_up', {
        title: "Sign up page"
    })
}

module.exports.signIn = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    return res.render('user_sign_in', {
        title: 'Sign in',
    })
}


// sign in and create a session for the user
module.exports.createSession = function (req, res) {
    req.flash('success', 'Logged In Succesfully'); // to pass this messages a custom middleware for flash is created
    return res.redirect('/');

}
// logout

module.exports.destroySession = function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        req.flash('success', 'Logged out Succesfully'); // to pass this messages a custom middleware for flash is created
        res.redirect('/');
    });
}

module.exports.create = async function (req, res) {
    if (req.body.confirmpassword != req.body.password) {
        req.flash('error', 'Enter matching passswords');
        return res.redirect("back");
    }
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        await User.create(req.body);
        req.flash('success', 'User is created please login');
        return res.redirect("/users/sign-in");
    }
    return res.redirect("back");
};