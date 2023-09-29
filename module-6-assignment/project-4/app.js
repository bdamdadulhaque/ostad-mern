
var express = require('express')

app = express()

app.get("/", function(req, res){
    res.clearCookie('name')
    res.clearCookie('language')
    res.clearCookie('theme')
    res.end('Cookie clear successfully')
})

app.listen(3000, function(){
    console.log("Server run successfully")
})