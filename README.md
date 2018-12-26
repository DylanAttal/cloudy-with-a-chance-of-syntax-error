# Cloudy With A Chance of Syntax Error

<p align="center">
<img src="public/giphy-cloudy.gif">
</p>

### See it live

http://cloudy-with-a-chance-of-syntax-error-dylanattal.surge.sh/

### Summary

This was the first project I ever used an API with! I went through the process of getting an API key with https://openweathermap.org/api and `fetch`ing the weather data from the API for a city or zip code that the user provides. This was also my first time converting a response from an API into JSON format. By using string interpolation, I was able to display the data in a way that's easy to read with the appropriate units.

I used vanilla Javascript to add elements to the DOM. I took advantage of `appendChild()` to create an unordered list that displayed the weather data. I got practice using `addEventListener()` to wait for the click on each "Search" button to display the results.

I am especially proud of using the Moment.js library to convert the time of sunrise and sunset from UNIX to AM or PM. I had never used a library before this project!

### Project Goals

- [x] Create an app where the user can look up the current weather
- [x] Let the user search by city or zip code
- [x] Add new elements to the DOM upon searching to display the weather data

### Technologies Used

HTML, CSS, Javascript, Moment.js
