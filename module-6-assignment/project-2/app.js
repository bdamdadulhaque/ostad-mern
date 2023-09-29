
var express = require('express')

app = express()

app.get("/success", function(req, res){
    res.status(200).end("This is success response and status code is 200")
})

app.get("/notfound", function(req, res){
    res.status(404).end("This is not found response and status code is 404")
})


app.listen(3000, function(){
    console.log("Server run successfully")
})