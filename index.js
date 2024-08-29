const express = require("express")

const app = express()

app.listen(2000,function()
{
    console.log("Port 2000 is Started")
})

var username = 'vishnu'
var password = 123
var confirmpassword = 123
var mobilenumber = 9345759373 

app.get("/login",function(req,res)
{
    if(req.query.username === username && req.query.password == password && req.query.password == confirmpassword && req.query.confirmpassword == confirmpassword &&   mobilenumber == mobilenumber)
    {
        res.send("Login successfull")
        console.log("Login successfull")
       
    }
    else{
        res.send("Falied")
        console.log("Login Failed")
    }
})