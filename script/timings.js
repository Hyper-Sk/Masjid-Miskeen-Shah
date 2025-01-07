function receiveData() {
  fetch("https://api.aladhan.com/v1/timings/07-01-2025?latitude=17.3850&longitude=78.4867&method=2")
    .then((response) => response.json())
    .then((data) => {
      getData(data);
    })
    .catch((err) => console.error(err));

  fetch(
    "https://api.aladhan.com/v1/gToH/07-01-2025?latitude=17.3850&longitude=78.4867&method=2"
  )
    .then((response) => response.json())
    .then((data) => {
      dateBar(data);
    })
    .catch((err) => console.error(err));
}

receiveData();

function getData(d) {
  sunrise = d.data.timings.Sunrise
  sunset = d.data.timings.Sunset
  let sunriseElement = document.querySelector(".bottombar .bottombar-content");
  //   console.log(sunriseElement);
  sunriseElement.innerHTML = `<p>Sunrise : ${sunrise} AM </p> <p>Sunset : ${sunset} PM</p>`;
}

function dateBar(hijriDate) {
  // English date india
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let year = new Date().getFullYear();
  let month = new Date().getMonth().toLocaleString("en-US", "Asia/Delhi");
  let date = new Date().getDate().toLocaleString("en-US", "Asia/Delhi");
  let today = `${date} ${months[month]} ${year}`;
  // console.log(today)
  let dateElement = document.querySelector(".timings .date-content");

  // hijri dates india
  let arabic = hijriDate.data.hijri.month.ar;
  let english = hijriDate.data.hijri.month.en;
  let hijriD = hijriDate.data.hijri.date;
  dateElement.innerHTML = `<p> ${today} |  ${hijriD} ${arabic} ${english}</p>`;
  // console.log(hi)
}
