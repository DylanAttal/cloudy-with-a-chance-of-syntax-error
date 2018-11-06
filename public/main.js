const getInputCity = event => {
  event.preventDefault()
  // Get city name that user enters into text input field
  let inputCity = document.querySelector('.city-name-input').value
  console.log(inputCity)
  // Put city name into the api url
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=imperial&appid=5529d8be646bfd216a2b2b7ef4f382c0`
  console.log(apiUrl)
  // fetch information from api and turn that info into an object called 'data'
  fetch(apiUrl)
    .then(resp => resp.json())
    .then(weatherObj => {
      const displayResults = () => {
        document.querySelector('.results-section').style.display = 'block'
      }
      displayResults()
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
      console.log(weatherObj)
      console.log(weatherObj.name)
      let weatherUL = document.querySelector('.weather-ul')
      const addCityName = () => {
        let cityName = document.createElement('li')
        cityName.textContent = `The weather in ${weatherObj.name} is: `
        cityName.classList.add('name')
        weatherUL.appendChild(cityName)
        console.log(cityName)
      }
      addCityName()
      let lowercaseDescription = weatherObj.weather[0].description
      console.log(upperDescription(lowercaseDescription))
      const addDescription = () => {
        let descriptionLI = document.createElement('li')
        descriptionLI.textContent = upperDescription(lowercaseDescription)
        weatherUL.appendChild(descriptionLI)
      }
      addDescription()
      const addTemp = () => {
        let tempLI = document.createElement('li')
        tempLI.textContent = 'Temperature: ' + Math.round(weatherObj.main.temp)
        weatherUL.appendChild(tempLI)
      }
      addTemp()
      const addMinTemp = () => {
        let minTempLI = document.createElement('li')
        minTempLI.textContent =
          'Min Temp: ' + Math.round(weatherObj.main.temp_min)
        weatherUL.appendChild(minTempLI)
      }
      addMinTemp()
      const addMaxTemp = () => {
        let maxTempLI = document.createElement('li')
        maxTempLI.textContent =
          'Max Temp: ' + Math.round(weatherObj.main.temp_max)
        weatherUL.appendChild(maxTempLI)
      }
      addMaxTemp()
      const addPressure = () => {
        let pressureLI = document.createElement('li')
        pressureLI.textContent =
          'Pressure: ' + weatherObj.main.pressure + ' hPa'
        weatherUL.appendChild(pressureLI)
      }
      addPressure()
      const addHumidity = () => {
        let humidityLI = document.createElement('li')
        humidityLI.textContent = 'Humidity: ' + weatherObj.main.humidity + ' %'
        weatherUL.appendChild(humidityLI)
      }
      addHumidity()
      let unixSunrise = weatherObj.sys.sunrise
      let newSunrise = 'Sunrise: ' + moment.unix(unixSunrise).format('LT')
      const addNewSunrise = () => {
        let newSunriseLI = document.createElement('li')
        newSunriseLI.textContent = newSunrise
        weatherUL.appendChild(newSunriseLI)
      }
      addNewSunrise()
      let unixSunset = weatherObj.sys.sunset
      let newSunset = 'Sunset: ' + moment.unix(unixSunset).format('LT')
      const addNewSunset = () => {
        let newSunsetLI = document.createElement('li')
        newSunsetLI.textContent = newSunset
        weatherUL.appendChild(newSunsetLI)
      }
      addNewSunset()
      document.querySelector('.sunset').textContent = newSunset
      document.querySelector('.city-name-input').disabled = true
      document.querySelector('.search-button').disabled = true
      document.querySelector('.city-zip-input').disabled = true
      document.querySelector('.search-zip-button').disabled = true
    })
}

const getInputZip = event => {
  event.preventDefault()
  // Get city name that user enters into text input field
  let inputZip = document.querySelector('.city-zip-input').value
  console.log(inputZip)
  // Put city name into the api url
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${inputZip}&units=imperial&appid=5529d8be646bfd216a2b2b7ef4f382c0`
  console.log(apiUrl)
  // fetch information from api and turn that info into an object called 'data'
  fetch(apiUrl)
    .then(resp => resp.json())
    .then(weatherObj => {
      const displayResults = () => {
        document.querySelector('.results-section').style.display = 'block'
      }
      displayResults()
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
      console.log(weatherObj)
      console.log(weatherObj.name)
      let weatherUL = document.querySelector('.weather-ul')
      const addCityName = () => {
        let cityName = document.createElement('li')
        cityName.textContent = `The weather in ${weatherObj.name} is: `
        cityName.classList.add('name')
        weatherUL.appendChild(cityName)
        console.log(cityName)
      }
      addCityName()
      let lowercaseDescription = weatherObj.weather[0].description
      console.log(upperDescription(lowercaseDescription))
      const addDescription = () => {
        let descriptionLI = document.createElement('li')
        descriptionLI.textContent = upperDescription(lowercaseDescription)
        weatherUL.appendChild(descriptionLI)
      }
      addDescription()
      const addTemp = () => {
        let tempLI = document.createElement('li')
        tempLI.textContent = 'Temperature: ' + Math.round(weatherObj.main.temp)
        weatherUL.appendChild(tempLI)
      }
      addTemp()
      const addMinTemp = () => {
        let minTempLI = document.createElement('li')
        minTempLI.textContent =
          'Min Temp: ' + Math.round(weatherObj.main.temp_min)
        weatherUL.appendChild(minTempLI)
      }
      addMinTemp()
      const addMaxTemp = () => {
        let maxTempLI = document.createElement('li')
        maxTempLI.textContent =
          'Max Temp: ' + Math.round(weatherObj.main.temp_max)
        weatherUL.appendChild(maxTempLI)
      }
      addMaxTemp()
      const addPressure = () => {
        let pressureLI = document.createElement('li')
        pressureLI.textContent =
          'Pressure: ' + weatherObj.main.pressure + ' hPa'
        weatherUL.appendChild(pressureLI)
      }
      addPressure()
      const addHumidity = () => {
        let humidityLI = document.createElement('li')
        humidityLI.textContent = 'Humidity: ' + weatherObj.main.humidity + ' %'
        weatherUL.appendChild(humidityLI)
      }
      addHumidity()
      let unixSunrise = weatherObj.sys.sunrise
      let newSunrise = 'Sunrise: ' + moment.unix(unixSunrise).format('LT')
      const addNewSunrise = () => {
        let newSunriseLI = document.createElement('li')
        newSunriseLI.textContent = newSunrise
        weatherUL.appendChild(newSunriseLI)
      }
      addNewSunrise()
      let unixSunset = weatherObj.sys.sunset
      let newSunset = 'Sunset: ' + moment.unix(unixSunset).format('LT')
      const addNewSunset = () => {
        let newSunsetLI = document.createElement('li')
        newSunsetLI.textContent = newSunset
        weatherUL.appendChild(newSunsetLI)
      }
      addNewSunset()
      document.querySelector('.city-name-input').disabled = true
      document.querySelector('.search-button').disabled = true
      document.querySelector('.city-zip-input').disabled = true
      document.querySelector('.search-zip-button').disabled = true
    })
}

const resetPage = () => {
  document.location.reload()
}

document.querySelector('.search-button').addEventListener('click', getInputCity)
document
  .querySelector('.search-zip-button')
  .addEventListener('click', getInputZip)
document.querySelector('.reset-button').addEventListener('click', resetPage)

const main = () => {}

document.addEventListener('DOMContentLoaded', main)
