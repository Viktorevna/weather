// const $city = document.querySelector('#city-input')
// const $bt = document.querySelector('#bt')
// $bt.addEventListener('click', function() {
const $city = document.querySelector('#city-input')
const $outp = document.querySelector('.outp')
const tem = document.createElement('div')
tem.classList.add('tem')
// $outp.appendChild(tem)
$city.addEventListener('keyup', function(event) {
    if (event.code === 'Enter' ) {
        const WeatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + $city.value + '&appid=021d1fbef7403d32bf662f1881a44606'
        const xhr = new XMLHttpRequest()
        xhr.open('GET', WeatherURL)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE &&
            xhr.status === 200) {
                const JSONString = JSON.parse(xhr.responseText)
                // const tem = document.createElement('div')
                // tem.classList.add('tem')
                $outp.appendChild(tem)
                tem.textContent = `Temperature in ${$city.value}: ${Math.floor(JSONString.main.temp - 273)}°C`
                $city.value = "" 
            }
        }
        xhr.send()
        // $city.value = "" 
    }
})
    


