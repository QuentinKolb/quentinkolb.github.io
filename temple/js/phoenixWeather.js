let weatherSummary = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5131135&units=imperial&APPID=8f3b136cada8556a53f344760a21ddfb';
weatherSummary.open('Get',apiURLstring, true);
weatherSummary.send();

weatherSummary.onload = function() {
    let weatherData = JSON.parse(weatherSummary.responseText);
    console.log (weatherData);
    document.getElementById('currentlyPhoenix').innerHTML = weatherData.main.temp;
}