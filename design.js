let express=require('express');
let app = express();

app.get('/blog/:id',(req,res)=>{
    console.log(req.params.id);
    res.send(`<h2>Hello world is beautiful ${req.params.id}</h2>
      <h3>Hi mr${req.params.id} let us learn some technology<h3>`);
});
app.get('/greet',(req,res)=>{
    res.send("hello there my name is aakash");
})
app.get('/greet/:id',(req,res)=>{
    console.log(`id:${req.params.id}`);
    res.send(`<h3>Hello there ${req.params.id}, Welcome message</h3>`);
});
app.get('/message',(req,res)=>{
    res.status(200).send("<h3>a simple message</h3>");
})
app.get('/intro',(req,res)=>{
    res.send("<h5>introduction about yourself or a made-up person my name is aaksh hello every one  i am best at explain the things very good</h5>");
})
app.listen(5500,()=>{
    console.log('server started');
})