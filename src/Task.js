const express = require('express')
// const App = express
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
// const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, PATCH, DELETE"
}))
app.use(express.json())
let itemData = [];
app.get("/GettingData", (req, res) => {
    // const query = req.query
    res.send(itemData)

})


app.post("/:id/:name", (req, res) => {
    const body = req.params
    itemData.push( body)
    res.send({ data: itemData })
})

app.delete("/:id",(req,res)=>{
    const id=req.params.id
    
    itemData = itemData.filter((item) => item.id !== id);
  console.log(itemData);
    
    res.send(`id ${id.id} has been deleted`)

})
// app.delete("/:id",(res,req)=>{
//     const id=req.params
//     itemData = itemData.filter((item) => item.id !== id);
//     console.log(itemData);
//     res.send(`id ${id.id} has been deleted`)


// })
// app.put("/:id",(res,req)=>{
// const id =req.params
// res.send(id)
// })
app.listen(3000, () => {
    console.log("testing")
})

