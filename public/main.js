class WeatherAPI {
  getWeatherByCity(city) {
    let cityURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=5529d8be646bfd216a2b2b7ef4f382c0`
    fetch(cityURL)
      .then(resp => resp.json())
      .then(weatherObj => {
        function upperDescription(str) {
          let splitArray = str.split(' ')
          let upperArray = []
          for (let i = 0; i < splitArray.length; i++) {
            upperArray.push(
              splitArray[i].charAt(0).toUpperCase() + splitArray[i].slice(1)
            )
          }
          return upperArray.join(' ')
        }
        document.querySelector('.results-section').style.display = 'block'
        let displayWeather = new UpdateDOM()
        displayWeather.addForecastToDOM(
          `The weather in ${weatherObj.name} is:`,
          upperDescription(weatherObj.weather[0].description),
          `Temperature: ${weatherObj.main.temp}°F`,
          `Min Temp: ${weatherObj.main.temp_min}°F`,
          `Max Temp: ${weatherObj.main.temp_max}°F`,
          `Pressure: ${weatherObj.main.pressure} hPa`,
          `Humidity: ${weatherObj.main.humidity}%`,
          'Sunrise: ' + moment.unix(weatherObj.sys.sunrise).format('LT'),
          'Sunset: ' + moment.unix(weatherObj.sys.sunset).format('LT')
        )
        document.querySelector('.city-name-input').disabled = true
        document.querySelector('.search-button').disabled = true
        document.querySelector('.city-zip-input').disabled = true
        document.querySelector('.search-zip-button').disabled = true
      })
  }

  getWeatherByZipCode(zip) {
    let zipURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=5529d8be646bfd216a2b2b7ef4f382c0`
    fetch(zipURL)
      .then(resp => resp.json())
      .then(weatherObj => {
        function upperDescription(str) {
          let splitArray = str.split(' ')
          let upperArray = []
          for (let i = 0; i < splitArray.length; i++) {
            upperArray.push(
              splitArray[i].charAt(0).toUpperCase() + splitArray[i].slice(1)
            )
          }
          return upperArray.join(' ')
        }
        document.querySelector('.results-section').style.display = 'block'
        let displayWeather = new UpdateDOM()
        displayWeather.addForecastToDOM(
          `The weather in ${weatherObj.name} is:`,
          upperDescription(weatherObj.weather[0].description),
          `Temperature: ${weatherObj.main.temp}°F`,
          `Min Temp: ${weatherObj.main.temp_min}°F`,
          `Max Temp: ${weatherObj.main.temp_max}°F`,
          `Pressure: ${weatherObj.main.pressure} hPa`,
          `Humidity: ${weatherObj.main.humidity}%`,
          'Sunrise: ' + moment.unix(weatherObj.sys.sunrise).format('LT'),
          'Sunset: ' + moment.unix(weatherObj.sys.sunset).format('LT')
        )
        document.querySelector('.city-name-input').disabled = true
        document.querySelector('.search-button').disabled = true
        document.querySelector('.city-zip-input').disabled = true
        document.querySelector('.search-zip-button').disabled = true
      })
  }
}

class UpdateDOM {
  constructor() {}

  addForecastToDOM(
    cityName,
    description,
    temp,
    minTemp,
    maxTemp,
    pressure,
    humidity,
    sunrise,
    sunset
  ) {
    let weatherUL = document.querySelector('.weather-ul')
    let updateCityName = document.createElement('li')
    updateCityName.textContent = cityName
    weatherUL.appendChild(updateCityName)
    let updateDescription = document.createElement('li')
    updateDescription.textContent = description
    weatherUL.appendChild(updateDescription)
    let updateTemp = document.createElement('li')
    updateTemp.textContent = temp
    weatherUL.appendChild(updateTemp)
    let updateMinTemp = document.createElement('li')
    updateMinTemp.textContent = minTemp
    weatherUL.appendChild(updateMinTemp)
    let updateMaxTemp = document.createElement('li')
    updateMaxTemp.textContent = maxTemp
    weatherUL.appendChild(updateMaxTemp)
    let updatePressure = document.createElement('li')
    updatePressure.textContent = pressure
    weatherUL.appendChild(updatePressure)
    let updateHumidity = document.createElement('li')
    updateHumidity.textContent = humidity
    weatherUL.appendChild(updateHumidity)
    let updateSunrise = document.createElement('li')
    updateSunrise.textContent = sunrise
    weatherUL.appendChild(updateSunrise)
    let updateSunset = document.createElement('li')
    updateSunset.textContent = sunset
    weatherUL.appendChild(updateSunset)
  }

  getCityInput() {
    let inputCity = document.querySelector('.city-name-input').value
    return inputCity
  }

  getZipInput() {
    let inputZip = document.querySelector('.city-zip-input').value
    return inputZip
  }
}

const resetPage = () => {
  document.location.reload()
}

handleClickCity = event => {
  let updateDOM = new UpdateDOM()
  let city = updateDOM.getCityInput()

  let weatherAPI = new WeatherAPI()
  weatherAPI.getWeatherByCity(city)
}

handleClickZip = () => {
  let updateDOM = new UpdateDOM()
  let zip = updateDOM.getZipInput()

  let weatherAPI = new WeatherAPI()
  weatherAPI.getWeatherByZipCode(zip)
}

document
  .querySelector('.search-button')
  .addEventListener('click', handleClickCity)
document
  .querySelector('.search-zip-button')
  .addEventListener('click', handleClickZip)
document.querySelector('.reset-button').addEventListener('click', resetPage)

const main = () => {}

document.addEventListener('DOMContentLoaded', main)
