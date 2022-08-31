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
// app.get("/drinks/:id",(req,res)=>{
//     res.send(req.params.id)
// })
  app.get("/drinks/:id", (req,res)=>{
    res.render("drinks_show.ejs", {
      drinks: drinks[req.params.id],
    })
})

//FOOD
//SAME THING DIFFERENT STUFF
//define food
const food = require("./models/food")
//routes
app.get("/food/", (req, res) => {
    res.render("food_index.ejs", {
      allFood: food,
    })
  })

  app.get("/food/:id", (req,res)=>{
    res.render("food_show.ejs", {
      food: food[req.params.id],
    })
})
