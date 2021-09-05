var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var container = document.getElementById("container");
var change = document.getElementById("change");
var paragraph = document.querySelector(".jokes_paragraph");
var weather_container = document.querySelector(".weather");
// OBTAINING THE WEATHER
var apiKey = "d391122e8b964df10273ed7808eae839";
var urlWeather = "https://api.openweathermap.org/data/2.5/weather?q=Spain&appid=" + apiKey;
function fetchWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, temperatureF, temperatureC;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(urlWeather, {
                        headers: {
                            Accept: "application/json"
                        }
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    temperatureF = data.main.temp;
                    temperatureC = temperatureF - 273;
                    return [2 /*return*/, Math.round(temperatureC)];
            }
        });
    });
}
var tagWeather = document.createElement("p"); // Creating the tag element
var textWeather = document.createTextNode("La temperatura es...");
tagWeather.appendChild(textWeather);
weather_container.appendChild(tagWeather);
function weather() {
    return __awaiter(this, void 0, void 0, function () {
        var temperature, new_tag, new_text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchWeather()];
                case 1: return [4 /*yield*/, (_a.sent()).toString()];
                case 2:
                    temperature = (_a.sent()) + "°C";
                    new_tag = document.createElement("p");
                    new_text = document.createTextNode(temperature);
                    new_tag.classList.add("weather_font");
                    new_tag.appendChild(new_text);
                    // We are replacing the object text
                    weather_container.replaceWith(new_tag);
                    return [2 /*return*/];
            }
        });
    });
}
// And when the window is loaded, is when we run the function
window.addEventListener("load", weather);
// COLLECTING JOKES (NEED TO COLLECT MORE JOKES FROM OTHER APIS)
// Create the async function to request to the url
function fetchJokes() {
    return __awaiter(this, void 0, void 0, function () {
        var random, url, response, data, joke, url, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    random = Math.floor(Math.random() * 2 + 1);
                    if (!(random == 1)) return [3 /*break*/, 3];
                    url = "https://icanhazdadjoke.com/";
                    return [4 /*yield*/, fetch(url, {
                            // We state which will be the header of the fetch, as the api require an accept header
                            headers: {
                                Accept: "application/json"
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    joke = data.joke;
                    console.log(joke);
                    return [2 /*return*/, joke];
                case 3:
                    url = "https://api.chucknorris.io/jokes/random";
                    return [4 /*yield*/, fetch(url, {
                            headers: {
                                Accept: "application/json"
                            }
                        })];
                case 4:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 5:
                    data = _a.sent();
                    // we return the joke that we want
                    return [2 /*return*/, data.value];
            }
        });
    });
}
// CHANGING JOKES
// Here we create the paragraph
var tag = document.createElement("p"); // Creating the tag element
var text = document.createTextNode("Clica al butó per obtenir acudits!");
tag.appendChild(text);
paragraph.appendChild(tag);
// To handle the onclick of the change button
change.onclick = function changer(e) {
    return __awaiter(this, void 0, void 0, function () {
        var new_joke, item, new_tag, new_text, containerStyle, random, random_name, random_url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchJokes()];
                case 1:
                    new_joke = _a.sent();
                    item = document.querySelector(".jokes_paragraph");
                    new_tag = document.createElement("p");
                    new_text = document.createTextNode(new_joke);
                    new_tag.appendChild(new_text);
                    // And we replace the child
                    paragraph.replaceChild(new_tag, item.childNodes[0]);
                    containerStyle = container.style;
                    random = Math.floor(Math.random() * 3 + 1);
                    random_name = "index" + random + ".svg";
                    random_url = "url(\"" + random_name + "\")";
                    console.log(random_url);
                    containerStyle.backgroundImage = random_url;
                    return [2 /*return*/];
            }
        });
    });
};
// HANDLING SCORES
// Create the array for the scores (CANNOT BE TYPE OF ANY --> MUST SOLVE)
var reportJokes = [];
// Handling the score submissions
function submission(score_num) {
    // First we obtain the text content of our jokes paragraph
    var text = document.querySelector(".jokes_paragraph").childNodes[0].textContent;
    // Now we obtain the actual date and convert to ISO
    var dateISO = new Date().toISOString();
    // And now we push this as a paragraph
    reportJokes.push({
        joke: text,
        score: score_num,
        date: dateISO
    });
    console.log(reportJokes);
}
