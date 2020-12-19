const express = require('express');
const router = express.Router();

let item = require('../models/item');       // REFERRING TO MY ITEM MODEL


// Route for Handling my GET REQUEST
router.get('/',function(req,res){
    item.find().then(items => {
        return res.status(200).json({items});
    }).catch(err => {
        console.log(err);
        return res.status(500).json({message:"Error Fetching Items"});
    });
});

module.exports = router;