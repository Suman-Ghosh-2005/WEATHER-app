
const APIurl="https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey="bdc82ca0475ecb44bc368b13d50e9f54";
const input= document.querySelector(".search input");
const wicon = document.querySelector(".wi");

async function cheackWeather(city) {
    const response=await fetch(APIurl+`&q=${city}`+ `&appid=${apiKey}`);
    var data= await  response.json()
    console.log(data);
    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%"
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c"
    document.querySelector(".feels").innerHTML=Math.round(data.main.feels_like) +" ° c"
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/hr"
  if(data.weather[0].main == "Rain" ){
    wicon.src ="rain.png"
  }
  else if(data.weather[0].main == "Drizzle" ){
    wicon.src ="drizzle.png"
  }
  else if(data.weather[0].main == "Mist" ){
    wicon.src ="mist.png"
  }
  else if(data.weather[0].main == "Clouds" ){
    wicon.src ="clouds.png"
  }
  else if(data.weather[0].main == "Clear" ){
    wicon.src ="clear.png"
  }
  else if(data.weather[0].main == "Haze" ){
    wicon.src ="mist.png"
  }

}

document.querySelector(".search button").addEventListener("click",()=>{
    cheackWeather(input.value)
});
