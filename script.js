const apikey = "b0f3279a4297d27587c5e7f697d09592";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
        const weatherIcon = document.querySelector(".weathericon");
        const searchInput = document.querySelector(".search input");
        const searchBtn = document.getElementById("searchBtn");
        const favoriteBtn = document.getElementById("favoriteBtn");
        const favoriteCitiesList = document.getElementById('favoriteCitiesList');

        function checkweather(city) {
            fetch(apiurl + city + `&appid=${apikey}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    document.querySelector(".city").innerHTML = data.name;
                    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

                    if (data.weather[0].main == "Clouds") {
                        weatherIcon.src = "clouds.png";
                    } else if (data.weather[0].main == "Clear") {
                        weatherIcon.src = "clear.png";
                    } else if (data.weather[0].main == "Rain") {
                        weatherIcon.src = "rain.png";
                    } else if (data.weather[0].main == "Snow") {
                        weatherIcon.src = "snow.png";
                    } else if (data.weather[0].main == "Mist") {
                        weatherIcon.src = "mist.png";
                    } else if (data.weather[0].main == "Drizzle") {
                        weatherIcon.src = "drizzle.png";
                    }
                });
             
                  document.querySelector(".weather").style.display= "block"
                
        }

        searchBtn.addEventListener("click", () => {
            checkweather(searchInput.value);
        });

        favoriteBtn.addEventListener("click", () => {
            const city = document.querySelector(".city").textContent;
            const listItem = document.createElement("li");
            listItem.textContent = city;
            favoriteCitiesList.appendChild(listItem);
        });