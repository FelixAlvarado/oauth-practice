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
}, (accessToken, refreshToken, profile, done) => {
    console.log('accessToken',accessToken);
    console.log('refresh Token', refreshToken);
    console.log('profile', profile);
    console.log('done', done);
})
);

const app = express();


//initial request to get use account info
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));


//using google access token and get use profile information. accesstoken in google stretegy will have info at this point
app.get('/auth/google/callback', passport.authenticate('google'));



app.listen(5000, () => console.log('listening on 5000'));

