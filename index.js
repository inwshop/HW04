var express = require('express')
var app = express()
var bodyparser = require('body-parser')

app.use(function(req,res,next) {
    console.log('user connect')
    next()
})

app.use(bodyparser.json())


app.post('/calculator/rest/plus',function(req,res,next){
    var body = req.body
    var x   =   body.x
    var y   =   body.y
    var result  =   0
    var obj = {
        "x" : x,
        "y" : y,
        "result x + y" : x + y
    }
    res.json(obj)
})
app.post('/calculator/rest/minus',function(req,res,next){
    var body = req.body
    var x   =   body.x
    var y   =   body.y
    var result  =   0
    var obj = {
        "x" : x,
        "y" : y,
        "result x - y" : x - y
    }
    res.json(obj)
})

app.post('/calculator/rest/kbtotb',function(req,res,next){
    var body = req.body
    var x   =   body.x
    var result  =   0
    var obj = {
        "KB" : x,
        "result KB to TB" : x*Math.pow(10, -9)
    }
    res.json(obj)
})

app.listen(3000,function(){
    console.log('Starting node on port'); 
});