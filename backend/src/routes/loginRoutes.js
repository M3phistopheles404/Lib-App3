const express = require('express');
const loginRouter = express.Router();
var bodyParser = require('body-parser'); 
const Usersdata = require('../model/Usersdata');

function router(nav,nav2){ 
    loginRouter.use(bodyParser.urlencoded({ extended: true })); 
    loginRouter.get('/', function(req,res){
        nav=nav2;
        res.render("login", 
        {
            nav,
            title: 'Library App'
        }); 
    });

    loginRouter.post('/', function(req,res){
            Usersdata.findOne({name: req.body.name})
            .then(function(user){
                if(user.password == req.body.password){
                    nav=nav;
                    res.redirect("/books"); 
                   
                    
                }
                else{
                    nav=nav2;
                    res.render("login", 
                    {
                        nav,
                        title: 'Library App',
                        msg: 'Wrong Password'
                    });
                }
            })
            .catch(function(){
                nav=nav2;
                res.render("login", 
                {
                    nav,
                    title: 'Library App',
                    msg: 'Wrong Username'
                });
            })
    });

    return loginRouter;
}

module.exports = router;