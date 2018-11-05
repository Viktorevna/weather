const $block = document.querySelector('.block')
const $city = document.querySelector('#city-input')
const $button = document.querySelector('.btn')


const outp = document.createElement('div')

const city = document.createElement('div')
const tem = document.createElement('div')
const icon_desc = document.createElement('div')
const icon = document.createElement('div')
const img = document.createElement('img')
const desc = document.createElement('div')

outp.classList.add('outp')
city.classList.add('city')
tem.classList.add('tem')
icon_desc.classList.add('icon_desc')
icon.classList.add('icon')
desc.classList.add('desc')

function weather() {
    const WeatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + $city.value + '&appid=021d1fbef7403d32bf662f1881a44606'
    const xhr = new XMLHttpRequest()
    xhr.open('GET', WeatherURL)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE &&
        xhr.status === 200) {
            const JSONString = JSON.parse(xhr.responseText)

            $block.appendChild(outp)
            outp.appendChild(city)
            outp.appendChild(tem)
            outp.appendChild(icon_desc)
            icon_desc.appendChild(icon)
            icon.appendChild(img)
            icon_desc.appendChild(desc)

            city.textContent = `${JSONString.name}, ${JSONString.sys.country}`
            tem.textContent = `${Math.floor(JSONString.main.temp - 273)}°`
            img.src = `img/${JSONString.weather[0].icon}.svg`
            desc.textContent = `${JSONString.weather[0].description}`
            
            if (Math.floor(JSONString.main.temp - 273) < 0) {
                $block.className = 'block cold'
            }
            if (Math.floor(JSONString.main.temp - 273) >= 0) {
                $block.className = 'block'
            }
            $city.value = "" 
        }
    }
    xhr.send()
}

$city.addEventListener('keyup', function(event) {
    if (event.code === 'Enter' ) {
        if ($city.value != "") {
            weather()
        }
    }
})
$button.addEventListener('click', function() {
    if ($city.value != "") {
        weather()
    }
})


