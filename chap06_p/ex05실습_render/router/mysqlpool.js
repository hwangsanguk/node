var express = require('express');
var mysql = require('mysql');
const dbconfig = require('./dbconfig');
const hasher = require('pbkdf2-password')();
var dbpool = mysql.createPool(dbconfig);

module.exports = function () {
    var router = express.Router();

    router.get('/test', function (req, res) {
        dbpool.getConnection((err, conn) => {


            conn.query('SELECT 1+1 AS solution', function (error, results, fields) {
                conn.release();
                if (error) throw error;
                console.log('result: ', results[0].solution);
                res.json(results);
            });
        });
    });

    router.get('/getuser', function (req, res) {
        dbpool.getConnection((err, conn) => {
            conn.query('SELECT * FROM user', function (error, results, fields) {
                conn.release();
                if (error) throw error;

                console.log('result: ', results);
                res.json(results);

            });
        });
    });


    router.get('/adduser', function (req, res) {
        dbpool.getConnection((err, conn) => {
            const query = 'INSERT INTO user (userid, password, salt,name, pnumber) VALUES ("ㅁㅈㄷ","ss","kk","aa","rr")';

            conn.query(query, function (error, results, fields) {
                conn.release();
                if (error) throw error;

                console.log('result: ', results);
                res.json(results);
            });
        });
    });

    router.post('/adduser2', function (req, res) {
        dbpool.getConnection((err, conn) => {
            console.log(req.body);

            let name = req.body.name;
            let password = req.body.password;
            let salt = 'salt';
            let userid = req.body.id;
            let pnumber = req.body.pnumber;

            const stmt = 'INSERT INTO user (userid, password, salt,name, pnumber) VALUES ("?","?","?","?","?")';

            conn.query(stmt, [userid, password, salt, name, pnumber], function (error, results, fields) {
                conn.release();
                if (error) throw error;

                console.log('result: ', results);
                res.json(results);
            });
        });
    });

    router.get('/adduser_form', (req, res) => {
        res.render('signin_form.html');
    })

    router.post('/adduser3', function (req, res) {
        dbpool.getConnection((err, conn) => {
        console.log(req.body);

        let name = req.body.name;
        let password = req.body.password;

        let userid = req.body.id;
        let pnumber = req.body.pnumber;

        hasher({

            password: password
        }, (err, pass, salt, hash) => {
            if (err) {
                console.log('ERR: ', err);
                res.redirect('/adduser_form')

            }
            console.log("err: ", 111);

            const stmt = 'INSERT INTO user (userid, password, salt,name, pnumber) VALUES (?,?,?,?,?)';
            console.log("err: ", 222);
            conn.query(stmt, [userid, hash, salt, name, pnumber], function (error, results, fields) {
                conn.release();
                if (error) throw error;

                console.log('result: ', results);
                res.json(results);

            })
        });
    });
    });

    router.get('/login_form', (req, res) => {
        res.render('login_form.html');
    })



    /* 해쉬값 필요 없을때의 로그인
    router.post('/login',(req,res)=>{
        let userid = req.body.id
        let password = req.body.password
        console.log(userid," ",password);
        const login = 'SELECT userid,password FROM user WHERE userid= ? and password = ?';

        connection.query(login, [userid, password], function (error, results, fields) {
            if (error) throw error;
            if (results == "") {console.log("로그인실패");
            }

            console.log('result: ', results);
            res.json(results);
        });
        
    })
    */

    //해시값이 필요한 로그인
    router.post('/login', (req, res) => {
        dbpool.getConnection((err, conn) => {
        console.log(req.body);
        let userid = req.body.id;
        let password = req.body.password;


        const stmt = 'SELECT * FROM user WHERE userid = ?';
        conn.query(stmt, [userid], function (error, results, fields) {
            if (error) throw error;

            console.log('results:', results);

            if (results) {
                const user = results[0];
                console.log(userid, "정보가 존재합니다.");
                console.log(user);

                hasher({
                    password: password,
                    salt: user.salt
                }, (err, pass, salt, hash) => {
                    console.log('hash: ', hash);
                    console.log('pass: ', user.password);

                    if (hash == user.password) {
                        console.log('로그인성공');
                        req.session.user = user;
                       
                        res.redirect('/');
                    } else {
                        console.log('패스워드를 틀렸습니다.');
                        res.redirect('/mysql/login_form');

                    }
                });
            } else {
                res.send('유저정보가 존재하지 않습니다.');
            }
            conn.release();
        })

    })
})

    return router;
}