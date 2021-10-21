const port = 3000,
    express = require('express'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    app = express(),
    ButterflyEntry = require('./models/butterflyModel.js'),
    bodyParser = require("body-parser");
require('dotenv').config();

const {response, request} = require("express");

// connect to mongodb & listen for requests
const uri = 'mongodb+srv://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => app.listen(process.env.PORT || port))
    .catch(err => console.log(err));

//register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

/*app.use( function( req,res,next) {
    if(req.url === '/signUpPage'){
        res.render('signUpPage');
        return;
    }
    if( req.session.login === true || req.url === '/css/style.css') {
        next()
    } else {
        res.render('login')
    }
})*/

// serve up static files in the directory public
app.use(express.static('public'));
app.use((req,res,next) => {
    res.locals.path = req.path;
    next();
});

app.post('/postButt', bodyParser.json(), async(req, res) =>{
    const entry = new ButterflyEntry({
        name: req.body.name,
        family: req.body.family,
        color: req.body.color,
        hwColor: req.body.hwColor,
        size: req.body.size,
        pattern: req.body.pattern,
        shape: req.body.shape,
        hooked: req.body.hooked,
        tails: req.body.tails,
        imgLoc: "greyedOut.png"
    })
    await entry.save()
        .then(async result => {
        })
        .catch(err => {
            console.log(err);
        });
    res.redirect('/index');
})

app.get('/', (req,res) => {
    res.redirect('/index');
})

app.get('/index', async (req, res) => {

    await ButterflyEntry.find()
        .then(result => {
            //console.log(result)
            res.render('index', {allEntries: result, title:"ID page"});
        })
        .catch(err =>{
            console.log(err);
        })
});

// 404 page
app.use((req,res) => {
    res.status(404).render('404',{title: '404'})
})

