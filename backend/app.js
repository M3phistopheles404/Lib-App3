const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const nav =[
    {
        link:'./books',name:'Books'
    },
    {
        link:'./authors',name:'Authors'
    },
    {
        link:'./admin',name:'Add Book'
    },
    {
        link:'./addauthor',name:'Add Author'
    },
    {
        link:'./login',name:'Login'
    },
    {
        link:'./signup',name:'Signup'
    }
];

const nav2 = [
    {
        link: '/signup', name: 'Sign Up'
    },
    {
        link: '/login', name: 'Log In'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const loginRouter = require('./src/routes/loginRoutes')(nav,nav2)
const signupRouter = require('./src/routes/signupRoutes')(nav)
const adminRouter = require('./src/routes/adminRoutes')(nav)
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav)

app.use(express.urlencoded({extended:true})); 
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addauthor',addauthorRouter);
app.use('/admin',adminRouter);
app.get('/',function(req,res){
    res.render("index",
    {
       nav,
        title:'Library'
    });
});

app.listen(port,()=>{console.log("Server Ready at" + port)});