let container = document.getElementById("container");
let change = document.getElementById("change");
let paragraph = document.querySelector(".jokes_paragraph");
let weather_container = document.querySelector(".weather");

// OBTAINING THE WEATHER
let apiKey: string = "d391122e8b964df10273ed7808eae839";
let urlWeather: string = `https://api.openweathermap.org/data/2.5/weather?q=Spain&appid=${apiKey}`;
async function fetchWeather() {
  let response = await fetch(urlWeather, {
    headers: {
      Accept: "application/json",
    },
  });
  let data = await response.json();
  let temperatureF: number = data.main.temp;
  let temperatureC: number = temperatureF - 273;
  return Math.round(temperatureC);
}

// Now we will create the element for the temperature in JS
let tagWeather = document.createElement("p"); // Creating the tag element
let textWeather = document.createTextNode("La temperatura es...");
tagWeather.appendChild(textWeather);
weather_container.appendChild(tagWeather);

async function weather() {
  let temperature:string = ((await fetchWeather()).toString()) + "°C";

  // And now we will replace the text with the actual temperature
  let new_tag: HTMLParagraphElement = document.createElement("p"); // Creating the tag element
  let new_text: Text = document.createTextNode(temperature);
  new_tag.classList.add("weather_font"); // To add some styles to the new element
  new_tag.appendChild(new_text);

  // We are replacing the object text by the one we created before
  weather_container.replaceWith(new_tag);
}

// And when the window is loaded, is when we run the function
window.addEventListener("load", weather);

// COLLECTING JOKES
// Create the async function to request to the url
async function fetchJokes() {
  let random: number = Math.floor(Math.random() * 2 + 1);

  if (random == 1) {
    let url: string = "https://icanhazdadjoke.com/";
    // We do asynchnoursly fetch for the data in the url
    let response = await fetch(url, {
      // We state which will be the header of the fetch, as the api require an accept header
      headers: {
        Accept: "application/json",
      },
    });
    // The data will be response in json, but we will have to await as the reponse is not immediately
    const data = await response.json();

    // Obtain the joke field
    let joke: string = data.joke;
    console.log(joke);
    return joke;
  } else {
    let url: string = "https://api.chucknorris.io/jokes/random";

    let response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();

    // we return the joke that we want
    return data.value;
  }
}

// CHANGING JOKES
// Here we create the paragraph
let tag = document.createElement("p"); // Creating the tag element
let text = document.createTextNode("Clica al butó per obtenir acudits!");
tag.appendChild(text);
paragraph.appendChild(tag);

// To handle the onclick of the change button
change.onclick = async function changer(e) {
  let new_joke:string = await fetchJokes();
  // Change the text with the one requested
  let item: ChildNode = document.querySelector(".jokes_paragraph");
  let new_tag: HTMLParagraphElement = document.createElement("p"); // Creating the tag element
  let new_text: Text = document.createTextNode(new_joke);
  new_tag.appendChild(new_text);

  // And we replace the child by the one created before
  paragraph.replaceChild(new_tag, item.childNodes[0]);

  // Changing the background
  let containerStyle = container.style;
  let random: number = Math.floor(Math.random() * 3 + 1);
  let random_name: string = "index" + random + ".svg";
  let random_url: string = `url("${random_name}")`;
  containerStyle.backgroundImage = random_url;
};

// HANDLING SCORES
// Create the array for the scores (CANNOT BE TYPE OF ANY --> MUST SOLVE)
let reportJokes = [];

// Handling the score submissions
function submission(score_num: number) {
  // First we obtain the text content of our jokes paragraph
  let text: string =
    document.querySelector(".jokes_paragraph").childNodes[0].textContent;

  // Now we obtain the actual date and convert to ISO
  let dateISO: string = new Date().toISOString();

  // And now we push this as a paragraph
  reportJokes.push({
    joke: text,
    score: score_num,
    date: dateISO,
  });

  console.log(reportJokes);
}
