var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/auth/google', function(req, res){
    res.render('first-template');
});


app.get('/second-template', function (req, res) {
    res.render('second-template');
});



app.listen(3000, 'localhost', function() {
    console.log('Nasłuchuje na porcie 3000');
});

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});