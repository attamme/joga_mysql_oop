const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const articleControllerClass = require('./controllers/article')
const articleController = new articleControllerClass();

const articleRoutes = require('./routes/articles');
app.use('/', articleRoutes);

/* const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'joga_mysql'
});

con.connect((err) => {
    if (err) throw err; 
    console.log('Connected to the database');
}) */

app.listen(3005, () => {
    console.log('App is started at http://localhost:3005');
})