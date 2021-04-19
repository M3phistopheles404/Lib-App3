const express = require('express');
const authorsRouter = express.Router();
const Authordata = require("../model/Authordata");
function router(nav){
    // var books = [
    //     {
    //         title: 'Tom and Jerry',
    //         author: 'Joseph Barbera',
    //         genre: 'Cartoon',
    //         img:"taj.png"
    
    //     },
    
    //     {
    //         title: 'Harry Potter',
    //         author: 'J k Rowling',
    //         genre: 'Fantasy',
    //         img:"HP.jpg"
    
    //     },
    
    //     {
    //         title: 'Sherlock Holmes',
    //         author: 'A C Doyle',
    //         genre: 'Mystery',
    //         img:"SH.jpg"
    
    //     }
    // ]
    
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",
        {
            nav,
            title:'Library',
            authors
        });

        })
        
    });

    authorsRouter.post('/', function(req,res){
        var author = { title : req.body.title, author : req.body.author, genre : req.body.genre, img : req.body.img};
        authors.push(author);
        res.render("author", 
        {
            nav,
            title: 'Library',
            authors
        });
    })
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id: id})
        .then(function(author){
            res.render("author",
            {
                nav,
                title:'Library',
                author
            });

        })
       
    });

    authorsRouter.get('/delete/:id',function(req,res){
        Authordata.deleteOne({_id:req.params.id})
        .then(function(){
            res.redirect('/authors');
        })
    })

    authorsRouter.post('/editauthor/:id/submit', function(req,res){
        const item = { title : req.body.title, author : req.body.author, genre : req.body.genre, img : req.body.img};
        const id = req.params.id;
        Authordata.updateOne({_id: id},item)
        .then(function(){
            res.redirect('/authors');
        })
        
    })

    authorsRouter.get('/editauthor/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id: id})
        .then(function(author){
            res.render("editauthor",
            {
                nav,
                title:'Library',
                author
            });

        })
       
    });

    return authorsRouter;
}


module.exports = router;