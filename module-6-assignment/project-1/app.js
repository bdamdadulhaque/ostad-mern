var express = require('express')
app = express()

app.get("/data", function(req, res){
    res.send("Hello, Express JS!")
})

app.listen(3000, function(){
    console.log('Server run successfully')
})
