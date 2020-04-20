
$("#zipweather").click(function(){
    
    var zipcodes = require('zipcodes')
    var zcode = zipcodes.lookup($("#zipcode").val());
    console.log(zcode);

    $.get("https://api.openweathermap.org/data/2.5/onecall?lat="+zcode.latitude+"&lon="+zcode.longitude+"&units=metric&appid=8e54c1c75f86eaf2c6cffb36fe1a15b0", function(data){
       console.log(data);
       $("#title-city").append("City")
       $("#name-city").append("<p>dsddsds"+zcode.city+"dsdsdds</p>")
       $("#city").append("<p>The Temperature in " +zcode.city+"  is  " +data.current.temp+" °C</p>")
       $("#answer").append("<p>The Current weather condition is " +data.current.weather[0].main + 
       	" and " +data.current.weather[0].description+" </p>")
       $("#city").append("<p>The Time is " +moment().tz(data.timezone).format('MMMM Do YYYY, h:mm a')+" </p>")	
    })
});
