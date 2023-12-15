let express=require('express');
let app=express();
app.use(express.json());
app.post('/user',(req,res)=>{
    res.status(200).send("<h2>hello world</h2>");
});

app.get('/user/:id',(req,res)=>{
    res.status(200).send(`<h3>hello everyone to ${req.params.id}</h3>`);
});
app.put('/user/:id',(req,res)=>{
    res.status(200).send(`<h3>hello my name is ${req.params.id}</h3>`);
});
app.delete('/user/:id',(req,res)=>{
    res.status(200).send(`<h3>hello my name is deleted ${req.params.id}</h3>`);
})
app.listen(5500,()=>{
    console.log("server started");
});