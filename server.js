//require express
const express = require("express")
const drinks = require("./models/drinks")
//initalize express app
const app = express()
//declare port #
const port = 3000
//listen in
app.listen(port,()=>{
    console.log("gitpub server is listening")
})
//main route
app.get("/",(req,res)=>{
    res.send("Welcome to the Gitpub App!")
})
//non-sepcific route
// app.get("/drinks/",(req,res)=>{
//     res.send(drinks)
// })
app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs", {
      allDrinks: drinks,
    })
  })

  //
  //add a new get route for drink/:id
app.get("/drinks/:id",(req,res)=>{
    res.send(req.params.id)
})
//   app.get("/drinks/:id", (req,res)=>{
//     res.render("drinks_show.ejs", {
//       drink: drinks[req.params.id],
//     })
// })