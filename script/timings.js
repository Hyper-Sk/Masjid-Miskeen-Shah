function receiveData() {
  fetch("https://api.sunrisesunset.io/json?lat=17.38405&lng=78.45636")
    .then((response) => response.json())
    .then((data) => {
      getData(data);
    })
    .catch((err) => console.error(err));
}

receiveData();

function getData(d) {
//   console.log(d);
  date = d.results.date;
  sunrise = d.results.sunrise;
  sunset = d.results.sunset;
  let sunriseElement = document.querySelector(".bottombar p span");
//   console.log(sunriseElement);
  sunriseElement.innerHTML = sunrise;
}

function dateBar() {
    // English date india
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let year = new Date().getFullYear()
    let month = new Date().getMonth().toLocaleString("en-US", "Asia/Delhi");
    let date = new Date().getDate().toLocaleString("en-US", "Asia/Delhi");
    let today = `${date} ${months[month]} ${year}`
    // console.log(today)
    let dateElement = document.querySelector('.timings .date-content')
    dateElement.innerHTML = `<p> ${today}</p>`
    
    
    // hijri dates india 
    
}
dateBar();
