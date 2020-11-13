$(document).ready(function () {


$("#searchBtn").on("click", function (event){
    event.preventDefault()
    var city = $("#searchInput").val();
    console.log(city);


});


});