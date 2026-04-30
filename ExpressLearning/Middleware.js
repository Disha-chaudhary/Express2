//middle ware ek aisa function hota hai jo har route se
//pahle chlta hai,iska matlab saareroutes mein koi bhi chale usse phle middle ware chlta hai
// or usme likha code pehle execute hota hai

const express = require('express');
const app = express();

app.use(express.json());

app.post('/data', (req, res) => {
    console.log(req.body);
    res.send("received");
});

app.listen(3200, () => {
    console.log("server running");
});