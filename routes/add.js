const express = require('express');
const router = express.Router();

let item = require('../models/item');

router.get('/',function(req,res){
    res.status(200).json({message:"OK"});
});


// POST REQUEST
router.post('/',function(req,res){
    let newItem = new item({
        name : req.body.name
    });

    newItem.save((err,result)=> {
        if(err) return res.status(500).json({message:"Error Saving Item"});
        else return res.status(200).json({message:"Item Saved"});
    });

});

module.exports = router;