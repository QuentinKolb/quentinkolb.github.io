let weatherSummary1 = new XMLHttpRequest();
let apiURLstring1 = 'https://api.openweathermap.org/data/2.5/weather?id=5430806&units=imperial&APPID=a292f85c385e59f13bb3c030b904c97f';
weatherSummary1.open('Get',apiURLstring1, true);
weatherSummary1.send();

weatherSummary1.onload = function() {
    let weatherData1 = JSON.parse(weatherSummary1.responseText);
    console.log (weatherData1);
    document.getElementById('currentlyMesa').innerHTML = weatherData1.main.temp;
}