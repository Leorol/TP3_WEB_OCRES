
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const city = document.getElementById('city-input').value;
  console.log(city)
  const apiWeather = new API_WEATHER(city);
  
  // Appel de la fonction fetchTodayForecast
 
  apiWeather
    .fetchForecast4Days()
    .then(function(response) {
    // Récupère la donnée d'une API
    const data = response.data;
    console.log(data);
    for (let i=0;i<4;i++)
      {
    // On récupère l'information principal
    const main = data.list[i].weather[0].main;
    const description = data.list[i].weather[0].description;
    const temp = data.list[i].temp.day;
    const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);
      
    // Modifier le DOM
    document.getElementById(i+'-forecast-main').innerHTML = main;
    document.getElementById(i+'-forecast-more-info').innerHTML = description;
    document.getElementById(i+'-icon-weather-container').innerHTML = icon;
    document.getElementById(i+'-forecast-temp').innerHTML = `${temp-273}°C`;
      }
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
