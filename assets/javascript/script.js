$(document).ready(function () {


$("#searchBtn").on("click", function (event){
    event.preventDefault()
    var city = $("#searchInput").val();
    console.log(city);
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" 
    + city + "&units=imperial&appid=e843562227bb1a74a27f6a81efac2153";
   
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function (response) {
            var data = response;
         console.log(data);
       $("#city").text(data.name + " (" + moment().subtract(10, 'days').calendar() +")");
       $("#temperature").text("Temperature: "+data.main.temp+"°F");
       $("#humidity").text("Humidity: "+data.main.humidity+"%");
       $("#windSpeed").text("WindSpeed: "+data.wind.speed+" MPH");

       var long = data.coord.lon;
       var lat = data.coord.lat;

       queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" 
       + lat + "&lon=" + long + "&appid=e843562227bb1a74a27f6a81efac2153";
   
       $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function (response) {
            var uviData = response;
            $("#uvIndex").text("UV Index: "+uviData.value);

      })
    });

    
  });
});