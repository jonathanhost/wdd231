
async function getWeather() {

    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-27.5949&lon=-48.5482&appid=154755306c2db4e5311c3ced5b758d2c&units=metric");

        const data = await response.json();

        document.querySelector("#current-temp").textContent =
            Math.round(data.main.temp) + "°C";

        document.querySelector("#weather-description").textContent =
            data.weather[0].description;

        document.querySelector("#weather-icon").src =
            "https://openweathermap.org/img/wn/" +
            data.weather[0].icon + "@2x.png";

    } catch (error) {
        console.log("Weather error:", error);
    }
}


async function getForecast() {

    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=-27.5949&lon=-48.5482&appid=154755306c2db4e5311c3ced5b758d2c&units=metric");

        const data = await response.json();

        document.querySelector("#forecast-container").innerHTML = "";

        let days = [];

        data.list.forEach(item => {

            const date = item.dt_txt.split(" ")[0];

            if (item.dt_txt.includes("12:00:00") &&
                !days.includes(date)) {

                days.push(date);

                const day = new Date(date + "T12:00:00")
                    .toLocaleDateString("en-US", {
                        weekday: "long"
                    });

                document.querySelector("#forecast-container").innerHTML += `
                    <div class="forecast-day">
                        <p>${day}</p>
                        <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png"
                             alt="${item.weather[0].description}">
                        <p class="forecast-temp">
                            ${Math.round(item.main.temp)}°C
                        </p>
                    </div>
                `;
            }
        });

    } catch (error) {
        console.log("Forecast error:", error);
    }
}

getWeather();
getForecast();
