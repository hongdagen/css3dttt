const express = require('express');
const swig = require('swig')
const app = express();
app.use(express.static('public'));
app.engine('.html', swig.renderFile);
app.set('view engine', 'html');
app.get('/', function (req, res) {
    res.render('index')
})
const server = app.listen(3000,function () {
    console.log('server running')
})