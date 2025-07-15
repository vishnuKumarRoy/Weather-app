async function getdata(){
    try {
    let cityName= document.querySelector('#userInput').value;
    if(cityName===""){
        cityName="Greater Noida";
    }
    const apiKey = "24d46604e520a686cc739f75a4360a7a";
    const apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    let response = await fetch(apiURL);   
    let data = await response.json();
    console.log(data);
     document.querySelector('.city').innerHTML=data.name;
     document.querySelector('.temp').innerHTML=`${Math.round(data.main.temp)}°C`;
     document.querySelector('.humidity').innerHTML=`${data.main.humidity} %`;
     document.querySelector('.wind').innerHTML=`${data.wind.speed} m/s`;
     let updatedImage= document.querySelector('.weather-image');
     if(data.weather[0].main==="Clear"){
       updatedImage.src="images/clear.png";
     }
     else if(data.weather[0].main==="Clouds"){
       updatedImage.src="images/clouds.png";
     }
     else if(data.weather[0].main==="Drizzle"){
       updatedImage.src="images/drizzle.png";
     }
     else if(data.weather[0].main==="Rain"){
       updatedImage.src="images/rain.png";
     }
     else if(data.weather[0].main==="Mist"){
       updatedImage.src="images/mist.png";
     }
     else if(data.weather[0].main==="Snow"){
       updatedImage.src="images/snow.png";
     }
     

    }
    catch(error) {
        console.error("Error fetching data :" ,error);
    }   
}
getdata();

document.querySelector('.myBtn').addEventListener("click",function oneClick(event){
      getdata();
      event.preventDefault();
    document.querySelector('#userInput').value="";
});





