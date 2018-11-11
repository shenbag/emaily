
const express = require ('express') ; 
const passport = require('passport');
const mongoose  =  require('mongoose') ; 4
const cookieSession = require ('cookie-session');
const keys = require('./config/keys')
const app = express();
app.use (cookieSession({
    maxAge : 24*3600*1000,
    keys : [keys.cookie]
}))


app.use (passport.initialize());
app.use (passport.session());


mongoose.connect(keys.mongoURI);
require('./models/User');
require('./services/passport');
require('./routes/routes')(app)


app.listen(2021)