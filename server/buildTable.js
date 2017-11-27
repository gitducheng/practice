var mysql = require('mysql')

var connection = mysql.createConnection({
	host     : 'localhost',       //主机
  	user     : 'root',               //MySQL认证用户名
  	password : '',        //MySQL认证用户密码123456
  	port: '3306'
})

connection.connect(function(err){
	if(err){
		console.log('connect err:' + err);
		return;
	}
	else{
		console.log('connect success!');
	}
});

//要创建的数据库名
TEST_DATABASE = 'vueblog';



connection.query('CREATE DATABASE '+TEST_DATABASE, function(err) {
if (err && err.number != connection.ERROR_DB_CREATE_EXISTS) {
throw err;
}
});


connection.query('USE '+TEST_DATABASE);
//文章
connection.query(
'CREATE TABLE  article'+
'(id INT(11) AUTO_INCREMENT, '+
'time VARCHAR(255), '+
'title VARCHAR(255), '+
'content VARCHAR(255), '+
'PRIMARY KEY (id))'
);
//评论
connection.query(
'CREATE TABLE comment' +
'(id INT(11) AUTO_INCREMENT, '+
'name VARCHAR(255), '+
'time VARCHAR(255), '+
'msg VARCHAR(255), '+
'PRIMARY KEY (id))'
);
//用户
connection.query(
'CREATE TABLE userinfo' +
'(Id INT(11) AUTO_INCREMENT, '+
'UserName VARCHAR(255), '+
'UserPass VARCHAR(255), '+
'email VARCHAR(255), '+
'PRIMARY KEY (id))'
);


connection.end();