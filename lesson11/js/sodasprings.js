const apiURL1 = "//api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=8f3b136cada8556a53f344760a21ddfb";


fetch(apiURL1)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById('temp').textContent = "Current temp: " + data.main.temp + "\xB0";
        document.getElementById('humid').textContent = "Humidity: " + data.main.humidity + "%";
        document.getElementById('speed').textContent = "Wind Speed: " + data.wind.speed + "mph";
        document.getElementById('current').textContent = "Currently: " + data.weather[0].main;


        const tempNumber = Number(data.main.temp);
        const speedNumber = Number(data.wind.speed);
        let wc;

        if (tempNumber <= 50 && speedNumber > 3) {
            wc = Math.round(35.74 + (.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, .16)) + (.4275 * tempNumber * Math.pow(speedNumber, .16)));
        } else {
            wc = "N/A";
            console.log(wc);
        }
    
        document.getElementById('chill').textContent = "Wind Chill: " + wc + "\xB0";

    });








const d = new Date();

const todayDayNumber = d.getDay();

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=8f3b136cada8556a53f344760a21ddfb";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        let mylist = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(mylist);

        let forecastDayNumber = todayDayNumber;
        for (i = 0; i < mylist.length; i++) {
            forecastDayNumber += 1;
            if (forecastDayNumber === 7) {
                forecastDayNumber = 0;
            }

            let theDayName = document.createElement("h3");
            theDayName.textContent = weekday[forecastDayNumber];

            let theTemp = document.createElement("p");
            theTemp.textContent = jsObject.list[i].main.temp + "\xB0";

            let iconcode = jsObject.list[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
            let theIcon = document.createElement("img");
            theIcon.src = iconPath;

            let theDay = document.createElement("div");
            theDay.appendChild(theDayName);
            theDay.appendChild(theTemp);
            theDay.appendChild(theIcon);

            document.getElementById('forecast').appendChild(theDay);

        }
    });


    const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Soda Springs"){
            let card = document.createElement('section');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            

            h3.textContent = "Upcoming Events: ";
           
            p.textContent = towns[i].events[0];
            p1.textContent = towns[i].events[1];
            p2.textContent = towns[i].events[2];
                        
            card.appendChild(h3);
            card.appendChild(p);
            card.appendChild(p1);
            card.appendChild(p2);
            

            document.querySelector('div.sodaevents').appendChild(card);

            }

        }
    });