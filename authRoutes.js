const passport = require('passport');

module.exports = app => {
app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['proflie', 'email']
    })
);

app.get('/auth/google/callback', passport.authenticate('google'));
};