require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require("cors");
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.use(cors()); 
app.use(express.json());
const sample = require('./controllers/sample');
const user = require('./controllers/users');
const adminuser = require('./controllers/adminuser');
const superu = require('./controllers/super');
const superd = require('./controllers/superdashboard');
const announcement = require('./controllers/announcement');
const vendor = require('./controllers/vendor');
const vendordashboard = require('./controllers/vendordashboard');
const cron = require('./controllers/cron');
const common = require('./controllers/common');
const product = require('./controllers/productandcategory');
app.get('/', (req, res) => {
  res.send(`Welcome to Local - Server updated on 28-11-2022 : Current Date :: ${new Date()}.`)
});

app.use('/api', sample);
app.use('/api/user', user);
app.use('/api/super', superu);
app.use('/api/admin', adminuser);
app.use('/api/superdashboard', superd);
app.use('/api/vendor', vendor);
app.use('/api/vendordashboard', vendordashboard);
app.use('/api/announcement', announcement);
app.use(express.urlencoded({limit: '10mb', extended: true}))
app.use('/api/product', product);
app.use('/api/cron', cron);
app.use('/api/common', common);
app.use(express.static('public')); 
app.use('/images', express.static('emailtemplate/img'));
app.use(express.static(__dirname + '/conqt'));

app.get("/conqt", function (request, response){
  //show this file when the "/" is requested
  response.sendFile(__dirname+"/emailtemplate/index.html");
});

// app.set("view engine", "pug");
// app.set("conqt", path.join(__dirname, "conqt"));

app.listen(port, () => {
    console.log(`Connect server Running on port No. : ${port}`);
})
