var container = document.getElementById("container");
var change = document.getElementById("change");
var paragraph = document.querySelector(".jokes_paragraph");
// Here we create the paragraph
var tag = document.createElement("p"); // Creating the tag element
var text = document.createTextNode("The text of the joke");
tag.appendChild(text);
paragraph.appendChild(tag);
// Create the array for the scores (CANNOT BE TYPE OF ANY --> MUST SOLVE)
var reportJokes = [];
// Handling the score submissions
var submission = function (number) {
    // First we obtain the text content of our jokes paragraph
    var text = document.querySelector(".jokes_paragraph").childNodes[0].textContent;
    // Now we obtain the actual date and convert to ISO
    var dateISO = new Date().toISOString();
    // And now we push this as a paragraph
    reportJokes.push({
        joke: text,
        score: number,
        date: dateISO
    });
    console.log(reportJokes);
};
// To handle the onclick of the change button
change.onclick = function changer(e) {
    // Change the text with the one requested
    var item = document.querySelector(".jokes_paragraph");
    var new_tag = document.createElement("p"); // Creating the tag element
    var new_text = document.createTextNode("Text changed");
    new_tag.appendChild(new_text);
    paragraph.replaceChild(new_tag, item.childNodes[0]);
    // Changing the background
    var containerStyle = container.style;
    var random = Math.floor(Math.random() * 3 + 1);
    var random_name = "index" + random + ".svg";
    var random_url = "url(\"" + random_name + "\")";
    console.log(random_url);
    containerStyle.backgroundImage = random_url;
};
