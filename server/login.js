var mysql  = require('mysql');  
var express = require('express');
var router = express.Router();

var db = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'nodesample', 
}); 
db.connect();

var verify = `SELECT * FROM userinfo`;

var login = {
	ver: function(req,res) {
		db.query(verify,function(err,rows) {
			if(err) {
				throw err;
			}
			if(rows.length==0) {
				res.send(200,{
					code: 1
				});
			} else {
				res.send(200,{
					code: 0
				});
			}
		});
	}
};
module.exports = login;