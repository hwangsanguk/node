var express = require('express');
var multer = require('multer');
var path = require('path');

module.exports = function () {
    var router = express.Router();

    var storage = multer.diskStorage({
        // 서버에 저장할 폴더
        destination: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        // 서버에 저장할 파일명
        filename: function (req, file, cb) {
            // file.uploadfilename = file.originalname.substring(0, file.originalname.lastIndexOf('.'));
            cb(null, new Date().valueOf() + '_' + file.originalname);
        }
    });
 
    var upload = multer({
        storage: storage,
        limits: {
            fileSize: 10*1024*1024
        }
    });
 

    var imgFileFilter = function (req, file, callback) {
        var ext = pat.extname(file.originalname);
        console.log('확장자 : ', ext);
        if (ext !== '.png' && ext !== '.jpg' && '.gif' && ext !=='jpeg'){
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true);
    };

    var imgUpload = multer({
        storage : storage,
        fileFilter : imgFileFilter,
        limits: {
            fileSize: 10*1024*1024
        }
    })

    router.get('/router', function (req, res) {
        console.log('/test/router');
        res.send('<h1>/test/router</h1>');
    });

    router.get('/router', (req, res) => {
        console.log('/test/router');
        res.send('<h1>/test/router 라우터 실험</h1>')
    })

    router.get('/fileupload_form', (req, res) => {
        res.render('test/fileupload.html');
    })

    router.post('/fileupload',upload.single('avatar'),(req,res)=>{
        console.log(req.file);
        var imgsrc = path.join('/files', req.file.filename);

        console.log(('imgsrc = ', imgsrc));
        res.render('test/showimage.html',{ imagesrc: imgsrc
        })
        // res.send(req.file.filename);
    })

    router.post('/fileupload_multi', upload.array('photos',5), (req,res,next)=>{
        console.log(req.files);
        res.send('uploaded...')
        
    })

    return router;
}

