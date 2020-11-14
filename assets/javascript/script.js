$(document).ready(function () {

// $("#searchInput").val(localStorage.getItem("city"));

function saveHistory(city){
    
      var historyCard = $("<div>");
      historyCard.addClass("card");

      var cardBody = $("<div>");
      cardBody.addClass("card-body");
      
      var cityName = $("<button>");
      cityName.addClass("cityBtn")
      cityName.text(city);

      $(".search-row").append(historyCard);
      historyCard.append(cardBody);
      cardBody.append(cityName);
 
}

function storeHistory(){
  localStorage.setItem("city",$("#searchInput").val());
}

$("#searchBtn").on("click", function displayWeather (event){
    event.preventDefault()
    var city = $("#searchInput").val();
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" 
    + city + "&units=imperial&appid=e843562227bb1a74a27f6a81efac2153";
   
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function (response) {
            var data = response;

        var icon = $("<img>");
        var iconCode=data.weather[0].icon;
        var iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
        icon.attr("src",iconURL);

       $("#city").text(data.name + " (" + moment().subtract(10, 'days').calendar() +")");
       $("#temperature").text("Temperature: "+data.main.temp+"°F");
       $("#humidity").text("Humidity: "+data.main.humidity+"%");
       $("#windSpeed").text("WindSpeed: "+data.wind.speed+" MPH");
       
       $("#city").append(icon);

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



    var secondURL = "https://api.openweathermap.org/data/2.5/forecast?q="
    + city + "&appid=e843562227bb1a74a27f6a81efac2153";

    $.ajax({
      url: secondURL,
      method: "GET"
     })
      .then(function (forecast) {
      
        var results = forecast.list;
        console.log(results);
        var dayForecast = ("<card>");
        $(".forecast-row")
        


    });


   saveHistory(city);
   storeHistory();
   $("#searchInput").val("");

  });


});