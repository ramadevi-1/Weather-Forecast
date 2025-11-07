const apikey = "e30104585d6a5242eace7d1d535c2c6d&";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const search1 = document.querySelector(".search button");
const icon = document.querySelector(".icon");

async function weather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
       
        
        var data = await response.json();
        console.log(data);
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if(data.weather[0].main == "Clouds"){
        icon.src = "cloud.jpg";
    }
    else if(data.weather[0].main == "Clear"){
        icon.src = "sunny1.jpg";
    }
    else if(data.weather[0].main == "Rain"){
        icon.src = "rain.jpg";
    }
    else if(data.weather[0].main == "Drizzle"){
        icon.src = "drizzle.jpg"; 
    }
    else if(data.weather[0].main == "Snow"){
        icon.src = "snow.jpg";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

   }
    
   
}

search1.addEventListener("click",()=>{
    weather(search.value);
})
