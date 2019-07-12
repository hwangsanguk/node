var express = require('express');
var router = express.Router();

router.get('/router', (req,res)=>{
    console.log('/test/router');
    res.send('<h1>/test/router 라우터 실험</h1>')
})


router.get('/fileupload_form', (req,res)=>{
    res.render('fileupload.html');
    })

module.exports = router;