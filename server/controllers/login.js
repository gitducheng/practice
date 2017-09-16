const mysql  = require('mysql');  
const express = require('express')
const querystring = require('querystring');
const log = require('../mysql/log.js')
const connection = mysql.createConnection(log)
const router = module.exports = express.Router()

router.prefix = '/api'

/**
 * POST /api/login
 */
router.post('/login', (req, res) => {
  var username = req.body.name;
  var password = req.body.pass;

    //connection.connect();
    var  userGetSql = 'SELECT * FROM userinfo';
	connection.query(userGetSql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        if(result[0].UserName==username&&result[0].UserPass==password){
        	//res.jsonp(result[0]);
        	req.session.user = "ceshi";
        	console.log(req.session.user);
        	res.jsonp(req.session.user);
        	return;
        }  
        res.jsonp("error");        
	});
})

router.post('/resgiter',(req, res) => {
	var name = req.body.name;
	var pass = req.body.pass;
	var email = req.body.email;

	var resgiterData = 'INSERT INTO userinfo (name,pass,email) VALUES ("'+name+'","'+pass+'","'+email+'")';
	//connection.query(resgiterData,function())
})