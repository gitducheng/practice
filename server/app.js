const path = require('path')
const glob = require('glob')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')


//const fs = require('fs')

const app = module.exports = express()
// fs.readFile('./dist/index.html', {flag: 'r+', encoding: 'utf8'}, function (err, data) { 
//   if(err) 
//     { console.error(err); return; } 
//   console.log('ok'); 
// });
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: false,
  secret: '12345'
}));

app.use(express.static('../dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
//以下应该放在这里吗？
app.use(function(req, res, next) {
  if (!req.session.user) {
    if (req.url == "/api/login") {
      next();
    } else {
      res.redirect('/user/login');
    }
  } else if (req.session.user) {
    next();
  }
});


// 载入所有控制器
const controllers = glob.sync('./controllers/**/*.js', { cwd: __dirname })
controllers.forEach(c => {
  // c = ./controllers/demo.js
  // 当一个模块没有导出任何成员默认返回 {}
  const controller = require(c)
  controller.prefix && app.use(controller.prefix, controller)
})

if (!module.parent) {
  // module.parent只有在当前文件被载入的情况下才会有值，否则为NULL
  // 可以利用这种机制判断是否是被依赖的情况
  const server = app.listen(process.env.PORT || 2080, error => {
    if (error) throw error
    const address = server.address()
    app.set('url', `http://127.0.0.1:${address.port}`)
    console.log('server is ready @ http://127.0.0.1:' + address.port)
  })
}

