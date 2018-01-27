const mysql  = require('mysql');  
const express = require('express')
const querystring = require('querystring');
const log = require('../mysql/log.js')
const connection = mysql.createConnection(log)
const router = module.exports = express.Router()

router.prefix = '/api'

/**
 * GET /api/comment
 */
router.get('/comment', (req, res) => {
  //connection.connect();
  var  userGetSql = 'SELECT * FROM comment';
	connection.query(userGetSql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        } 
        res.jsonp(result);        
	})
});

router.post('/sendComment', (req, res) => {
  var name = req.body.name;
  var time = req.body.time;
  var msg = req.body.msg;
  
  var inserComment = 'INSERT INTO comment (name,time,msg) VALUES ("'+name+'","'+time+'","'+msg+'")';
  connection.query(inserComment,function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        res.jsonp(result);
  })
})

