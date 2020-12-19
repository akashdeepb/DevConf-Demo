let express = require('express');
let app = express();

let PORT = 3000;    // PORT YOU WANT TO RUN YOUR SERVER ON

require('./config/database');       // CONNECT TO DATABASE

// ROUTER
let addRouter = require('./routes/add');

app.use('/add',addRouter);

// GET Request to Server /
app.get('/',function(req,res){
    res.send("Hi");
});

app.listen(PORT,function(){
    console.log("Server running on PORT : " + PORT);
});