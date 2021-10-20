var express = require("express");

var app = express();


app.listen(8080, function () {
    console.log("Server gestartet auf http://localhost:8080");
});
app.use(express.static("public"));


app.use("/res", express.static(__dirname + "/view/res"));


app.get("/",function (req,res){
    res.sendFile(__dirname+"/index.html")
})

app.get("/result/:value",function (req,res){
    var value=req.params.value;
    console.log(value)
    var res1 = eval(value);

    res.send(""+res1);
});
