let weatherSummary2 = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/weather?id=5318313&units=imperial&APPID=a292f85c385e59f13bb3c030b904c97f';
weatherSummary2.open('Get',apiURLstring2, true);
weatherSummary2.send();

weatherSummary2.onload = function() {
    let weatherData2 = JSON.parse(weatherSummary2.responseText);
    console.log (weatherData2);
    document.getElementById('currentlyTucson').innerHTML = weatherData2.main.temp;
}