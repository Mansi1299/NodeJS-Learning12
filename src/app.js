// const express = require("express")
// require("dotenv").config()
// const bodyParser = require("body-parser")
// const cors = require("cors")
// const app = express()
// const dumdata = require("./dumbdata.json")

// //middleware 

// app.use(bodyParser.json())
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: "GET, POST, PUT, PATCH, DELETE"
// }))

// const port = process.env.PORT

// app.get("/api/posts/fetch", (req, res) => {
//     const query = req.query

//     try {
//         if (Object.keys(query).length > 0) {
//             if (query.title || query.category) {
//                 const data1 = dumdata.filter(e => e.title.startsWith(query.title) || e.category.startsWith(query.category))
//                 res.send({ data: data1 })
//             } else {
//                 res.send({ error: "Please give the correct query ex:- Title, Category" })
//             }
//         }
//         else {
//             console.log("error")
//             res.send({ data: dumdata })
//         }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   `1`
//     }
//     catch (e) {
//         res.send({ error: "Server Error" })
//     }

// })



// //http://localhost:8080?search=text&type=modal
// //http://localhost:8080
// app.get("/", (req, res) => {
//     const query = req.query
//     res.send(query)

// })

// // http://localhost:8080/1/mansi
// app.get("/:id/", (req, res) => {
//     const params = req.params
//    try{
// if(params.id){
//     const data1=dumdata.filter((e)=>e.id==params.id)
//     console.log(data1)
//     res.send(data1)
// }
//     }
   
//    catch{
//     res.send({ error })
//    }
// })

// app.post("/:id", (req, res) => {
//     const body = req.body
//     res.send(body)
// })

// app.put("/:id", (req, res) => {
//     const body = req.body
//     const params = req.params
//     res.send(body)
// })

// app.delete("/:id", (req, res) => {    // only id will send here 
//     const params = req.params
//     res.send({ ...params, ...{ params } })
// })

// app.listen(port, () => {
//     console.log("server listing port " + port)

// })
// const http =require('http')
// var fs = require('fs')
// require("dotenv").config()
// const port = process.env.PORT
// var server=http.createServer(function(req,res){
//    fs.readFile('demotext.txt','utf-8',function(err,data){
    
//        res.writeHead(200, {'Content-Type': 'text/html'});
//        res.write(data);
//     //    res.end('Hello World!');
//    })
// })
    

// server.listen(port, function (error) { 
  
//     // Checking any error occur while listening on port 
//     if (error) { 
//         console.log('Something went wrong', error); 
//     } 
//     // Else sent message of listening 
//     else { 
//         console.log('Server is listening on port' + port); 
//     } 
// })

// Fs Module 
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    // fs.readFile('src/demotext.txt',"utf8", (err, data) => {
    //     res.write(data);
    //     res.end("Mansi")
    //   });
     // fs.appendFile('src/demotext.txt',"MAnsi What are you doing", 'utf8', (err, data) => {
    //     console.log("Added SuccessFully")
    //     res.end("Mansi")
    //   });
    fs.open
}).listen(8080);