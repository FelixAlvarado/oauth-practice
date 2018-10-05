const express = require('express');

const passport = require('passport');
const GoogleStretegy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStretegy());

const app = express();


app.listen(3000, () => console.log('listening on 3000'));

