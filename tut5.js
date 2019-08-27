let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let viewsPath = __dirname + "/views/";

let db = []

app.engine("html", require('ejs').renderFile);
app.set("view engine", "html");

app.get('/', function(req,res){
    res.sendFile(viewsPath + "index.html");
});

app.use(bodyParser.urlencoded({extended: false}));

app.get('/addcustomerw5t1', function(req,res){
    res.sendFile(viewsPath + "addcustomer.html");
});

app.post('/addthiscustomerw5', function(req,res){
    console.log(req.body);
    db.push(req.body);
    res.render(viewsPath + "allcustomer.html", {
        customers: db
    });
});




app.listen(8080);