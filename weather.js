

// async function getWeather () {

// const { json } = require("stream/consumers");

//const { error } = require("console");

// // const { json } = require("stream/consumers");
//     const APIkey = "cbca0b0f288c40409b4102552241409";
//     const lat = 22.4567;
//     const lon = 2.5647;
    
//     const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${lat,lon}&aqi=yes`) ;
//     let data =await response.json(); 
//     console.log("Weather data", (data?.current?.condition?.text));
//     console.log(src=`https://flagcdn.com/144x108/${location?.country.lowercase()}.png `);
    
   
//     let newpara = document.querySelector("p");
//     newpara.textContent = (data.location.lon);

// }
// getWeather();

// https://api.weatherapi.com/v1/current.json?key=66a0e66ad28b4d7c940122635240509&q=Kalyan&aqi=no


const userTab = document.querySelector("[data-Userweather]");
const searchTab = document.querySelector("[data-Searchweather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant_loction_container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading_container");
const userInfoContainer = document.querySelector(".user_info_container");

let current_Tab = userTab;
const APIkey = "d2103b1776e7486c9e0171717241409";
current_Tab.classList.add("current_tab");


function switchTab(clickedTab) {
    if (clickedTab != current_Tab) {
        current_Tab.classList.remove("current_tab");
        current_Tab = clickedTab;
        current_Tab.classList.add("current_tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.add("active");
            getFromSessionstorage();
        }
    }
    
}

userTab.addEventListener("click", () => {
    switchTab(userTab)

});
searchTab.addEventListener("click", () => {
    switchTab(searchTab)
});

function getFromSessionstorage() {
    const localCordi = sessionStorage.getItem("user-cordi");
    if (!localCordi) {
        grantAccessContainer.classList.add("active");

    }
    else{
        const cordi = json.parse(cordi);
        fetchUserWeatherInfo(cordi);
    }
}
async function fetchUserWeatherInfo(cordi) {
    const {lat, lon} = cordi;
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${lat},${lon}&aqi=yes`);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err){
        loadingScreen.classList.add("active");
    }
}

// async function fetchCountryFlag(weatherInfo) {
    
//     try {
//         const countryResponse = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(weatherInfo?.location?.country)}`);
//         if (!countryResponse.ok) {
//             throw new Error('Country not found');
//         }
//         let countryData = await countryResponse.json();
//         const flagUrl = `https://flagsapi.com/${countryData[0]?.cca2}/flat/64.png`;
//         return flagUrl;
//     } catch (err) {
//         console.error('Error fetching flag image:', err);
//         // Hide loading screen and show error message
        
//         return null;
//     }
// }


function renderWeatherInfo(weatherInfo){
    const cityName = document.querySelector(".city_name");
    const countryIcon = document.querySelector("[data_countryIcon]");
    const desc = document.querySelector(".weather_type");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector(".data_tempr");
    const windSpeed = document.querySelector("[wind_speed]");
    const humidity = document.querySelector("[humidity_para]");
    const cloudiness = document.querySelector("[cloud_para]");

    cityName.innerText = weatherInfo?.location?.name;
    countryIcon.src = "https://flagsapi.com/IN/shiny/64.png";
    desc.innerText = weatherInfo?.current?.condition?.text;
    weatherIcon.src = `${weatherInfo?.current?.condition?.icon}`;
    temp.innerText = `${weatherInfo?.current?.temp_c}` + "℃";
    windSpeed.innerText = `${weatherInfo?.current?.wind_kph}` + "KPH";
    humidity.innerText = `${weatherInfo?.current?.humidity}` + "%";
    cloudiness.innerText = `${weatherInfo?.current?.cloud}` + "%";

}


function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else {
      grantAccessButton.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    const userCordi = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-cordi", JSON.stringify(userCordi));
    fetchUserWeatherInfo(userCordi);
    
  }
const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");
searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let cityName = searchInput.value;
    if(cityName === ""){
        return;
    }
    else{
        fetchSearchWeatherInfo(cityName);
    }
})

async function fetchSearchWeatherInfo(cityName){
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${cityName}&aqi=yes`);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data)
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        //something
        return err("NO Details found");
    }
}


