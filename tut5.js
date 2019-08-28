let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let viewsPath = __dirname + "/views/";
app.use(express.static('views/image'))
app.use(express.static('views/css'));

let db = []

app.engine("html", require('ejs').renderFile);
app.set("view engine", "html");

app.get('/', function(req,res){
    res.sendFile(viewsPath + "index.html");
});

app.use(bodyParser.urlencoded({extended: false}));

app.get('/addtask_', function(req,res){
    res.sendFile(viewsPath + "addtask.html");
});

app.post('/appendTask', function(req,res){
    console.log(req.body);
    db.push(req.body);
    res.render(viewsPath + "listtask.html", {
        task: db
    });
});

app.get('/listAll', function(req,res){
    console.log(req.body);
    db.push(req.body);
    res.render(viewsPath + "listtask.html", {
        task: db
    });
})




app.listen(8080);