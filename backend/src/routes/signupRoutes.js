const express =  require('express');
const signupRouter = express.Router();
const { check, validationResult } = require('express-validator');
const Usersdata = require('../model/Usersdata')


function router(navs){

    
    signupRouter.get('/',function(req,res){
        res.render("signup",
        {
            navs,
             title: 'Library',
           
            });
    });
    // check('name','Name must have atleast 4 alphabets').isAlpha().isLength({min:4}),

    signupRouter.post('/submit',
        [check('email','Enter vaild email').isEmail()], check('password','Min 6 characters').isLength({ min: 6}),function(req,res){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.render("signup", 
            {
                navs,
                title: 'Library',
                error: errors.mapped()
            });
        }
        else{

        var item = {
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }
        var user = Usersdata(item);
        user.save();
        res.redirect('/login');
    }
        
        
        
    });


    


 
    return signupRouter;

}


module.exports = router;