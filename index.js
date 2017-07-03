var express = require('express');

var path = require('path');

var bodyParser = require('body-parser')

var app = express();

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, './static')));

app.use(function(req, res, next) {
    console.log('index.js ==>  ', req.originalUrl);
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
/*
api请求的注册放在页面或者其他路由注册的前面
满足api路由的时候，以api对应的路由返回为准
不满足的时候，继续走下面的路由
如果 app.use('/', require("./view.js"))在/api/*的前面，那么在/的路由中需要对api/*的路由进行排除
*/
//app.get('/api/*', require("./api.js"));
//app.use('/api', jsonParser, require("./api.js"));
app.use('/api', require("./api.js"));

app.use('/', require("./view.js"));

app.listen(8800);

console.log('当前服务起的端口为8800，访问页面的方式为:http://localhost:8800/index.html');

var open = require('open');

open("http://localhost:8800/index.html");
