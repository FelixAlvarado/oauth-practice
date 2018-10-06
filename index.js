//current doing testing oauth

const express = require('express');

const passport = require('passport');
const GoogleStretegy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

passport.use(
    new GoogleStretegy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken) => {
    console.log(accessToken);
})
);

const app = express();

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));



app.listen(5000, () => console.log('listening on 5000'));

