let express = require('express');
let app = express();

let PORT = 3000;    // PORT YOU WANT TO RUN YOUR SERVER ON


app.listen(PORT,function(){
    console.log("Server running on PORT : " + PORT);
});