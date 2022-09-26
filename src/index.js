const express = require('express');
const morgan = require('morgan');
const {engine}=require('express-handlebars');
const path = require('path');
const flash = require('connect-flash')
const session = require('express-session');
const Mysqltore = require('express-mysql-session');
const {database} = require('./key');

//initilaization
const app = express()


// Settings
app.set('port', process.env.PORT || 5500 );
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main', 
    LayoutDir: path.join(app.get('views'),'Layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs', 
    helpers: require('./lib/helpers')
    
})) 

app.set('views engine','.hbs');

//midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(flash());
app.use(session({
    secret: 'mysqlapikey',
    resave: true,
    saveUninitialized: true,
    store: new Mysqltore(database)
}));


//global variables


//routes
app.use(require('./routes/index.js'))

//public
app.use(express.static(path.join(__dirname + '/public/')))

// starging the server
app.listen(app.get('port'),()=>{
    console.log('Server on port ', app.get('port'));
})