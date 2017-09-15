const mysql  = require('mysql');  
const express = require('express')
const querystring = require('querystring');
const log = require('../mysql/log.js')
const connection = mysql.createConnection(log)
const router = module.exports = express.Router()

router.prefix = '/api'

/**
 * POST /api/write
 */
router.post('/write', (req, res) => {
  var title = req.body.input;
  var time = req.body.time;
  var content = req.body.content.slice(3,-4);

  
    //connection.connect();
    var  inserWrite = 'INSERT INTO article (time,title,content) VALUES ("'+time+'","'+title+'","'+content+'")';
	connection.query(inserWrite,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
          res.jsonp(result);
           
	});

 
})

