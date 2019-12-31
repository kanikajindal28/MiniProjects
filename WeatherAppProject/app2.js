
function func()
{
	
	var city = $("#exampleInput").val();
var myRequest = new XMLHttpRequest();
var myData;
var url='http://api.openweathermap.org/data/2.5/weather?q='+city+',IN&appid=340eafd820a87cde5c35bf721ed34e30';
myRequest.open('GET',url);
myRequest.onload= function()
{
			$("#result").toggleClass("show");
            myData = JSON.parse(myRequest.responseText);
	var temp =  parseInt(myData.main['temp'] - 273)+"&deg;C";
		var data_name= myData['name'];
		var wind = myData.wind['speed'];
		var sstime= new Date(myData.sys['sunset']*1000);
		var final = "<h2>" +'City Name : ' +data_name + '<br>'+ "</h2> <h2>Temperature : " + temp  + '<br>'+ "</h2><h2> Sun Set Time : " +sstime  + "</h2><h2> Wind Speed : "+wind +  "</h2>";
		$("#result").html(final);
       
	
};
myRequest.send();

};

