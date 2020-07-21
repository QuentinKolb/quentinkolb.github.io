let weatherSummary1 = new XMLHttpRequest();
let apiURLstring1 = 'https://api.openweathermap.org/data/2.5/weather?id=5430806&units=imperial&APPID=8f3b136cada8556a53f344760a21ddfb';
weatherSummary1.open('Get',apiURLstring1, true);
weatherSummary1.send();

weatherSummary1.onload = function() {
    let weatherData1 = JSON.parse(weatherSummary1.responseText);
    console.log (weatherData1);
    document.getElementById('currentlyMesa').innerHTML = weatherData1.main.temp;
}