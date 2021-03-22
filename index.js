search()
function search()
{
    var city = document.getElementById("city").value;
    
    fetch('https://api.openweathermap.org/data/2.5/weather?&appid=22de6844a293b9986dc38afa1a2e0cbc&units=metric&q='+city)
    .then(data => data.json())
    .then(response => {

    
    var temp = response.main.temp;
    var description = response.weather[0].description
    var icon  = response.weather[0].icon

        document.getElementById("cityName").innerHTML = city    
        document.getElementById("temp").innerHTML = temp+"°C"
        document.getElementById("desc").innerHTML = description
        document.getElementById("icon").setAttribute("src", "http://openweathermap.org/img/wn/"+icon+"@2x.png")

       
    })

}