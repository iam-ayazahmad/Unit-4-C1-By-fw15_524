const express= require("express")

const app= express()

app.use(logger)

app.use(checkPermission)

function logger(req,res,next){

    console.log("route handler")
    next()
    console.log("after route")

}

function checkPermission(req,res,next){
    console.log("checkPermission 1")
    next()
    console.log("checkPermission 2")


}




app.get("/books", function(req,res){

    return res.send("books")
})

app.get("/libraries", function(req,res){

    return res.send({ route: "/libraries", permission: true})
})
app.get("/authors", function(req,res){

    return res.send({ route: "/authors", permission: true})
})


app.listen(5000,()=>{

    console.log("Listening to port 5000")
})