
var express = require('express')

app = express()

app.get("/", function(req, res){
    res.cookie('name', 'JohnDoe')
    res.cookie('language', 'en')
    res.cookie('theme', 'dark')

    res.end('Cookie set successfully')
})



app.listen(3000, function(){
    console.log("Server run successfully")
})