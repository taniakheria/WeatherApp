key = "784f5991664aa5ae86a1f9eebcd8338d"; //API key 

//Accessing DOM elements 
let currentTemp = document.getElementById("temperature");
let locat = document.querySelector(".Location2");
let descrip = document.querySelector(".description");
let code;
let icon = document.getElementById("iconImage");
let feels = document.getElementById("feelsLike");
let humidityValue = document.getElementById("humidity");

// Accessing location of the user after loading the code
window.addEventListener("load", async function currentLoc(){
//Checking if supports location
if( navigator.geolocation){
    let lat;
    let lon;
navigator.geolocation.getCurrentPosition( async(position)=>{
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  console.log(lat);
  console.log(lon);
//Url of the API 
const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

console.log(base); // This will give some link in console 

// Converting the data to json format 
let response = await fetch(base);
const data = await response.json();
console.log(data);

currentTemp = data.main.temp;
// locat.textContent = `${data.data[0].city_name}`;
temperature.textContent =  `${currentTemp.toFixed(0)}°C`;
let description = data.weather[0].description;
descrip.textContent = description;

let location = data.name;
locat.textContent = location;
code = data.weather[0].icon;
iconUrl = `https://openweathermap.org/img/wn/${code}@2x.png`;
icon.src = iconUrl;
//foot1 
let feelsLike = data.main.feels_like;
feels.textContent = feelsLike;
//foot2
let humidity = data.main.humidity;
humidityValue.textContent = `${humidity}%`;


})

}
});

// Device location button click function
let getLocat = document.querySelector(".btn");
    getLocat.addEventListener("click", () =>{
     if( navigator.geolocation){
    let lat;
    let lon;
    navigator.geolocation.getCurrentPosition( async(position)=>{
  lon = position.coords.longitude;
  lat = position.coords.latitude;
  const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
  // Converting the data to json format 
let response = await fetch(base);
const data = await response.json();
console.log(data);

currentTemp = data.main.temp;
// locat.textContent = `${data.data[0].city_name}`;
temperature.textContent =  `${currentTemp.toFixed(0)}°C`;
let description = data.weather[0].description;
descrip.textContent = description;

let location = data.name;
locat.textContent = location;
code = data.weather[0].icon;
iconUrl = `https://openweathermap.org/img/wn/${code}@2x.png`;
icon.src = iconUrl;
//foot1 
let feelsLike = data.main.feels_like;
feels.textContent = feelsLike;
//foot2
let humidity = data.main.humidity;
humidityValue.textContent = `${humidity}%`;
             
})
}
});

// Getting Data by entering city name: 
let submit = document.getElementById("button-addon2");
submit.addEventListener("click",searchCity);
async function searchCity(){
  let city = document.getElementById("search3");
  let cityValue = city.value;
  if( cityValue == ""){
    alert("Please enter your city name");
  }
  else{
    let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    console.log(cityUrl);
    let response = await fetch(cityUrl);
    const data = await response.json();
    console.log(data);
    
    currentTemp = data.main.temp;
    // locat.textContent = `${data.data[0].city_name}`;
    temperature.textContent =  `${currentTemp.toFixed(0)}°C`;
    let description = data.weather[0].description;
    descrip.textContent = description;
    
    let location = data.name;
    locat.textContent = location;
    code = data.weather[0].icon;
    iconUrl = `https://openweathermap.org/img/wn/${code}@2x.png`;
    icon.src = iconUrl;
    //foot1 
    let feelsLike = data.main.feels_like;
    feels.textContent = feelsLike;
    //foot2
    let humidity = data.main.humidity;
    humidityValue.textContent = `${humidity}%`;
  }
};