module.exports.setFlash = function(req,res,next){ // this is custom flash middleware this is used to pass this flash 
    // message into responce 
    res.locals.flash = {
        'success' : req.flash('success'),
        'error':req.flash('error'),
    }
    next();
}


