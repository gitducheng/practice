const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var login = require('./login');
var fs = require('fs');
var http = require('http');

var router = express.Router();
const server = express();


var urlencodedParser = bodyParser.urlencoded({extended:false});

server.use(urlencodedParser);
server.use(router);

server.get("/", function(request, response) {
    console.log(22)
   fs.readFile("",'utf-8',function(err,data){
        // body
        if(err){
            console.log(err);
            //404：NOT FOUND
            response.writeHead(404,{"Content-Type":"text/html"});
        }
        else{
            //200：OK
            console.log(data.toString());
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(data);
        }
        response.end();
    });
});



//login page
router.get("/user/lo",function(req,res) {
	// login.ver(req,res);
	console.log(req);
	var data={
		message:'212'
	}
	res.send("<h1>123</h1>");
	//res.json(data);

});

server.listen(8088,function() {
	console.log("zhibi staring");
});