async function getWeather(){
    let city = document.getElementById("city").value.trim();
    let result = document.getElementById("result");

    if(city === ""){
        result.innerHTML = "Enter a city like Solapur";
        return;
    }

    const apiKey = "81ac8a5a61d38e8fdbc756022c09e998";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const res = await fetch(url);
        const data = await res.json();

        if(data.cod == "404"){
            result.innerHTML = "City not found.";
            return;
        }

        result.innerHTML = `
            <p><b>${data.name}, ${data.sys.country}</b></p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;

    }catch(err){
        console.log(err);
        result.innerHTML = "Error fetching weather";
    }
}
