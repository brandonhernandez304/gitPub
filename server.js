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
app.get("/drinks/",(req,res)=>{
    res.send(drinks)
})
// app.get("/drinks/", (request, response) => {
//     response.render("drinks_index.ejs", {
//       allDrinks: drinks,
//     })
//   })

//   //
//   app.get("/drinks/:indexOfDrinksArray", (req,res)=>{
//     res.render("drinks_show.ejs", {
//       drink: drinks[req.params.indexOfDrinksArray],
//     })
// })