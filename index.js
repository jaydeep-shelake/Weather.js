console.log('weather.js');

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click',updateWeather)


function updateWeather(){
 
    const searchInput = document.getElementById('search').value;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&APPID=850ee855ff939fea8f88736ee056e1fb`;
    document.getElementById('discription').innerHTML='<p>Loading...</p>';
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        const cityName=data.name;
        const temprature=Math.ceil(data.main.temp-273);
        const discription=data.weather[0].description;

        
        document.getElementById('discription').innerHTML=discription;
        document.getElementById('temptaure').innerHTML=temprature+'&deg;'+'<small>C</small>';
        document.getElementById('name').innerHTML=cityName;
         

        const date = new Date();
        const months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        const day =["Sun","Mon","Tue","Wed","Tur","Fri","Sat"];
        document.getElementById('date').innerHTML=months[date.getMonth()]+`,<small>${date.getDate()}</small>,<small>${day[date.getDay()]}</small>`;

        const icon = document.getElementById('icon');
        if(discription=='haze' || discription=='smoke' || discription=='fog' || discription=='mist'){
            icon.innerHTML=`<i class="far fa-sun-haze"></i>`;
        }
        else if(discription=='overcast clouds'){
            icon.innerHTML=`<i class="fal fa-clouds-sun"></i>`;
        }
        else if(discription=='clear sky'){
            icon.innerHTML=`<i class="far fa-sun"></i>`
        }
        else if(discription=='rain' || discription=='shower rain'){
            icon.innerHTML=`<i class="fal fa-cloud-showers-heavy"></i>`
        }
        else if(discription=='thunderstrom'){
            icon.innerHTML=`<i class="far fa-thunderstorm"></i>`
        }
        else if(discription=='snow'){
            icon.innerHTML=`<i class="far fa-snowflakes"></i>`
        }
    });
   console.log('clicked');
    console.log(searchInput);

    

}
