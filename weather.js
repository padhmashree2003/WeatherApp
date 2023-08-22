const apikey = "fa5f5752dc291d592e3300e984e25f0b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const waethericon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C ";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        if(data.weather[0].main == "Clouds"){
            waethericon.src="images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            waethericon.src="images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            waethericon.src="images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            waethericon.src="images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            waethericon.src="images/mist.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
   
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})


