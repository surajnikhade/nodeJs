const express = require("express");

const app = express();

app.use("/test",(req, res)=>{
res.send("Hello from server");
})

app.use('/hello',(req, res)=>{
    res.send('response for hello');
})

app.use('/red' , (req, res)=>{
    res.send('red is the response');
})
app.listen(3000 , ()=>{
    console.log("run port 3000");
});