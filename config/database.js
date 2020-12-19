let mongoose = require('mongoose');

const DB_URI = 'mongodb+srv://akashdeepb:p2r7ls8MTtMi0ipT@soscluster-utlqu.mongodb.net/test?retryWrites=true&w=majority';

const options = {
    useNewUrlParser: true,
    useCreateIndex : true,
    useUnifiedTopology : true,
    poolSize : 10
}

mongoose.connect(DB_URI,options).then(
    () => {
        console.log("DB Conencted");
    },
    err => {
        console.log("DB Connection Failed");
    }
);