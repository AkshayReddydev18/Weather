document.getElementById("getweather").addEventListener("click", () => {
  let city = document.getElementById("city").value;
  if (city) {
    fetchdata(city);
  } else {
    alert("Enter the City Name");
  }
});
async function fetchdata(city) {
  const apikey = "30bdbb02cccfd8f53dfe3799a4a24074";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("city not found");
    }
    let data = await response.json();
    display(data);
  } catch (error) {
    let a = document.getElementById("result");
    a.style.color = "red";
    a.innerHTML = error.message;
  } finally {
  }
}
function display(data) {
  const { main, name, weather, wind } = data;

  let b = document.getElementById("result");
  b.innerHTML = `
  <h1>${name}</h1>
  <p>Humidity:${main.humidity}</p>
  <span>Tempeartute:${main.temp}</span>
  <p>clouds:${weather[0].description}</p>
  <p>wind:${wind.speed}km</p>
  `;
}
