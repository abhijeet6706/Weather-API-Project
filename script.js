const accesskey = "6a50ffebcca5af320661ae0eee4b0186";

const searchInput = document.querySelector('.search input')
const temp = document.querySelector('.temp')
const city = document.querySelector('.city')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const image = document.querySelector('.weather-icon')
const searchButton = document.querySelector('.search button')

let inputData = ""

async function searchCountries(){   
    inputData = searchInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=6a50ffebcca5af320661ae0eee4b0186&units=metric`
    
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    temp.innerText = data.main.temp+'°C'
    city.innerText = data.name
    humidity.innerText = data.main.humidity+'%'
    wind.innerText = data.wind.speed+ ' km/h'
    console.log(data.weather[0].main);
    if(data.weather[0].main == 'Clear'){
        image.src = '/weather-app-img/clear.png'
    }else if(data.weather[0].main == 'Clouds'){
        image.src = '/weather-app-img/clouds.png'
    }else if(data.weather[0].main == 'Drizzle'){
        image.src = '/weather-app-img/drizzle.png'
    }else if(data.weather[0].main == 'Humidity'){
        image.src = '/weather-app-img/humidity.png'
    }else if(data.weather[0].main == 'Mist'){
        image.src = '/weather-app-img/mist.png'
    }else if(data.weather[0].main == 'Rain'){
        image.src = '/weather-app-img/rain.png'
    }else if(data.weather[0].main == 'Snow' || data.weather[0].main == 'Fog'){
        image.src = '/weather-app-img/snow.png'
    }else if(data.weather[0].main == 'wind'){
        image.src = '/weather-app-img/wind.png'
    }

}


searchButton.addEventListener('click',()=>{
    searchCountries(inputData)
})

