const mysql  = require('mysql');  
const express = require('express')
const querystring = require('querystring');
const log = require('../mysql/log.js')
const connection = mysql.createConnection(log)
const router = module.exports = express.Router()

router.prefix = '/api'

/**
 * POST /api/lists
 */
router.post('/list', (req, res) => {
  var  id= req.body.id;

    //connection.connect();
    var  article = 'SELECT * FROM article WHERE id='+id;
	connection.query(article,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        res.jsonp(result);        
	});
})

router.get('/lists', (req, res) => {
    //connection.connect();
    var  articles = 'SELECT * FROM article';
  connection.query(articles,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        res.jsonp(result);        
  });
})

router.post('/delete', (req, res) => {
  var  id= req.body.id;

    //connection.connect();
    var  delArticle = 'DELETE FROM article WHERE id='+id;
  connection.query(delArticle,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        res.jsonp(result);        
  });
})