let weatherSummary2 = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/weather?id=5318313&units=imperial&APPID=8f3b136cada8556a53f344760a21ddfb';
weatherSummary2.open('Get',apiURLstring2, true);
weatherSummary2.send();

weatherSummary2.onload = function() {
    let weatherData2 = JSON.parse(weatherSummary2.responseText);
    console.log (weatherData2);
    document.getElementById('currentlyTucson').innerHTML = weatherData2.main.temp;
}