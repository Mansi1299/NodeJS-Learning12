const express = require('express')
const app=express()
const cors=require('cors')

var fs = require('fs')
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, PATCH, DELETE"
}))

app.get('/',(res,req)=>{
    fs.readFile('demotext.txt','r+', function (err, data) {
        if (err) {
           return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
     });
    
})


app.listen(3000, () => {
    console.log("Server Started")
})