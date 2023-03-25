const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.render('user_sign_up',{
        title:"Sign up page"
    })
}

module.exports.signUp = function(req,res){
     return res.render('user_sign_up',{
       title:"Sign up page"
    })
}

module.exports.signIn = function(req,res){
     return res.render('user_sign_in',{
        title:'Sign in',
    })
}

// get the sign up data
// module.exports.create = async function(req, res){


//     User.findOne({email: req.body.email}, function(err, user){
//         if(err){console.log('error in finding user in signing up'); return}

//         if (!user){
//             User.create(req.body, function(err, user){
//                 if(err){console.log('error in creating user while signing up'); return}

//                 return res.redirect('/users/sign-in');
//             })
//         }else{
//             return res.redirect('back');
//         }

//     });
// }



// sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/');
}
// logout

module.exports.destroySession = async function(req,res){
    res.cookie('user_id','');
    res.redirect('/users/sign-in');
}


module.exports.create = async function (req, res) {
 
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      await User.create(req.body);
      return res.redirect("/users/sign-in");
    }
    return res.redirect("back");
  };