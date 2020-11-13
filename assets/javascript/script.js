$(document).ready(function () {


$("#searchBtn").on("click", function (event){
    event.preventDefault()
    var city = $("#searchInput").val();
    console.log(city);
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" 
    + city + "&appid=e843562227bb1a74a27f6a81efac2153";

    


});


});