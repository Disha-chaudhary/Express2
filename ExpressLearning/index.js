const express = require('express');
const app = express();

app.get('/home',(req,res)=>{
    res.send("Hello from Home Page!!");

})
app.get('/about',(req,res)=>{
    res.send("This is the about page")
})
app.get('/login',(req,res)=>{
    res.send("this is the login page")
})

app.listen((3000),()=>{
console.log("Server is Working");
});

