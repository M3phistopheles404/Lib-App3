const express = require('express');
const booksRouter = express.Router();
const Bookdata = require("../model/Bookdata");
function router(nav){
   
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
        {
            nav,
            title:'Library',
            books
        });

        })
        
    });

    // booksRouter.post('/', function(req,res){
    //     var book = { title : req.body.title, author : req.body.author, genre : req.body.genre, img : req.body.img};
    //     books.push(book);
    //     res.render("books", 
    //     {
    //         nav,
    //         title: 'Library',
    //         books
    //     });
    // })
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render("book",
            {
                nav,
                title:'Library',
                book
            });

        })
       
    });

    booksRouter.get('/delete/:id',function(req,res){
        Bookdata.deleteOne({_id:req.params.id})
        .then(function(){
            res.redirect('/books');
        })
    })

    booksRouter.post('/editbook/:id/submit', function(req,res){
        const item = { title : req.body.title, author : req.body.author, genre : req.body.genre, img : req.body.img};
        const id = req.params.id;
        Bookdata.updateOne({_id: id},item)
        .then(function(){
            res.redirect('/books');
        })
        
    })

    booksRouter.get('/editbook/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render("editbook",
            {
                nav,
                title:'Library',
                book
            });

        })
       
    });

    return booksRouter;
}


module.exports = router;