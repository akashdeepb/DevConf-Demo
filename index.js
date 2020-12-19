let express = require('express');
let app = express();

let PORT = 3000;    // PORT YOU WANT TO RUN YOUR SERVER ON

// GET Request to Server /
app.get('/',function(req,res){
    res.send("Hi");
});

app.listen(PORT,function(){
    console.log("Server running on PORT : " + PORT);
});