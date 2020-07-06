let weatherSummary3 = new XMLHttpRequest();
let apiURLstring3 = 'https://api.openweathermap.org/data/2.5/weather?id=5295903&units=imperial&APPID=a292f85c385e59f13bb3c030b904c97f';
weatherSummary3.open('Get',apiURLstring3, true);
weatherSummary3.send();

weatherSummary3.onload = function() {
    let weatherData3 = JSON.parse(weatherSummary3.responseText);
    console.log (weatherData3);
    document.getElementById('currentlyGilbert').innerHTML = weatherData3.main.temp;
}