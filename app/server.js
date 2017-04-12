var express= require('express')
 , app=express()
 , path=require('path')
 , bodyParser=require('body-parser')
 , fs= require('fs')
 , jsonfile=require('jsonfile');


var file='package.json';


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.use("/static/",express.static(path.join(__dirname,'bower_components')));


app.get("/",function(req,res){
 	res.render('index.ejs',{
 		name:'Student Information System'
 	});
});

app.post("/",function(req,res){
	
	res={
	First_Name:req.body.first_name,
	Last_Name:req.body.last_name,
	Address:req.body.address,
	Age:req.body.age,
	Gender:req.body.gender,
	Contact_Number:req.body.contact_num
	};
	jsonfile.readFile(file, function(err, obj) {
  		console.dir(res);
  		

	jsonfile.writeFile(file,res,function(err){
			//console.dir(jsonfile.readFileSync(file));
			console.log("preparing a json file");
			});
			if(err){
				return console.error(err);			}
			});
	
	res.end;
});
	/*
	 
console.log("creating JSON file");
	fs.readFile('package.json',function(err,data){
			fs.writeFile('package.json',JSON.stringify(res),function(err){
				console.log("Writing data into package.json");
				if(err){
					return console.error(err);
				}
			});
		if(err){
			return console.log(err);
		}
	});

	//var result=JSON.stringify('Students:'+res);
	jsonfile.readFile(file, function(err, obj) {
  	console.dir(obj)
	});

	console.dir(jsonfile.readFileSync(file));
	jsonfile.writeFile(file, res, function(err) {
  	console.error(err)*/
/*
	console.log("creating JSON file");
	fs.readFile('package.json',function(err,data){
		fs.writeFile('package.json',JSON.stringify(res),function(err){
			console.log("Writing data into package.json");
			if(err){
				return console.error(err);
			}
		});
		if(err){
			return console.log(err);
		}
	});
	res.end;
	*/



app.listen(8000,function(){
	console.log("server is running at 8000");
})