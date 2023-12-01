//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=5d8e068e9ac014e94ba084d5bc08d23c


//Variaveis e selecão de lementos
const apiKEy= "5d8e068e9ac014e94ba084d5bc08d23c"
const apiCountryURL = "https://flagsapi.com/"

const cityInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('#search')

//Funções 
const showWeatherData = (city) => {
    console.log(city)
}


//Eventos
searchBtn.addEventListener('click', (e) =>{
    e.preventDefault()

    const city = cityInput.value

    console.log(city)
})

