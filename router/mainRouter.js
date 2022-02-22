const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get("/", function(req, res){
    //res.send({"Key":"Value"});
    let page = req.query.page
    console.log("[query]")
    console.log(page)

    res.send({"Key":"Value"});
})

router.get("/about", function(req, res){
    res.send('About Page ');
})

router.post("/postapi", function(req,res){
    let body = req.body;
    console.log(body)
    res.send('POST API')
})

module.exports = router;