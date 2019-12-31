
var http = require('http');

	//var city = $("#exampleInput").val();
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=Ambala,IN&appid=340eafd820a87cde5c35bf721ed34e30';
var server= http.createServer(function(request,response)
{
	var request = require('request');
	request(url,function(err,msg,body)
	{
		var data=JSON.parse(body);
		var temp =  parseInt(data.main['temp'] - 273)+"&deg;C";
		var data_name= data['name'];
		var sstime= new Date(data.sys['sunset']*1000);
		var final = "<h1>" +'City Name : ' +data_name + '<br>'+ "</h1> <h2>Temperature : " + temp  + '<br>'+ "</h2><h2> Sun Set Time : " +sstime + "</h2>";
		response.write(final);
		response.end();
	});
}).listen(8081);
