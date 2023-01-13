const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a45ea187fmsh2291afc8cc9e617p121544jsndb46b8eddaa3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
        
        // temp.innerHTML = response.temp
        // humidity.innerHTML =  response.humidity
        // wind_speed.innerHTML = response.wind_speed
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML =  response.temp
        feels_like.innerHTML =  response.feels_like
        humidity.innerHTML =  response.humidity
        min_temp.innerHTML =  response.min_temp
        max_temp.innerHTML =  response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML =  response.wind_degrees
        sunrise.innerHTML =  response.sunrise
        sunset.innerHTML =  response.sunset
          
        
    })
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e) =>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")