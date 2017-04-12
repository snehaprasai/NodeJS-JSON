var express=require('express');
var app=express();


app.get("/",function(req,res){
	res.send("<h1>Express Framework is cool</h1>")
});

app.listen(9000,function(){
	console.log("server is running at 9000");
})