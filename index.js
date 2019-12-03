var express= require('express');
var app = express();
var port =3000;

app.get('/',function(request,respose){
 respose.send("Hello I'm a good Boy");
})
app.listen(port,function () {
	console.log('severr runn port'+port);
})