const express = require('express');
const passport = require('passport');

const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/sign-up', usersController.signUp);

router.get('/sign-in', usersController.signIn);

router.post('/create', usersController.create);

router.post('/update', usersController.update);

// use passport as middleware to autj
router.post('/create-session', passport.authenticate(
    'local',
    {
        failureRedirect: '/users/sign-in'
    },
),
    usersController.createSession
);

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/users/sign-in' }), usersController.createSession)

router.get('/destroy-session', usersController.destroySession);

module.exports = router;