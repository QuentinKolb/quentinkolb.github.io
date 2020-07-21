let weatherSummary3 = new XMLHttpRequest();
let apiURLstring3 = 'https://api.openweathermap.org/data/2.5/weather?id=5295903&units=imperial&APPID=8f3b136cada8556a53f344760a21ddfb';
weatherSummary3.open('Get',apiURLstring3, true);
weatherSummary3.send();

weatherSummary3.onload = function() {
    let weatherData3 = JSON.parse(weatherSummary3.responseText);
    console.log (weatherData3);
    document.getElementById('currentlyGilbert').innerHTML = weatherData3.main.temp;
}