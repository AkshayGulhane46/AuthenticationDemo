const { findByIdAndUpdate } = require('../models/user');
const User = require('../models/user');

module.exports.profile = function(req,res){
    //let user = User.findById(req.params.id)
    return res.render('profile',{
        title:"Sign up page",
        //profile_user : user,
    })
}

module.exports.update =  async function(req,res){
    
    let user = await User.findById(req.query.id);
    console.log(user);
    console.log(req.body.name);
    console.log(req.body.email);
    user.name = req.body.name;
    user.email = req.body.email;
    user.save();
    
    return res.redirect('back');

        //User.findByIdAndUpdate(req.params.id , req.body, function(err,user){
           
    //     })
    // }else{
    //     return res.status(401).send('Unauthorized');
    // }
}

module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
     return res.render('user_sign_up',{
       title:"Sign up page"
    })
}

module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
     return res.render('user_sign_in',{
        title:'Sign in',
    })
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/');
}
// logout

module.exports.destroySession = function(req,res,next){
    req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
}


module.exports.create = async function (req, res) {
 
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      await User.create(req.body);
      return res.redirect("/users/sign-in");
    }
    return res.redirect("back");
  };