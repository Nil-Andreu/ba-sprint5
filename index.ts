let container = document.getElementById("container");
let change = document.getElementById("change");
let paragraph = document.querySelector(".jokes_paragraph");

// Here we create the paragraph
let tag = document.createElement("p"); // Creating the tag element
let text = document.createTextNode("The text of the joke");
tag.appendChild(text);
paragraph.appendChild(tag);

// Create the array for the scores (CANNOT BE TYPE OF ANY --> MUST SOLVE)
let reportJokes = []

// Handling the score submissions
let submission = number => {
    // First we obtain the text content of our jokes paragraph
    let text:string = document.querySelector(".jokes_paragraph").childNodes[0].textContent;

    // Now we obtain the actual date and convert to ISO
    let dateISO:string = new Date().toISOString()

    // And now we push this as a paragraph
    reportJokes.push({
        joke: text,
        score: number,
        date: dateISO
    })

    console.log(reportJokes)
    

}



// To handle the onclick of the change button
change.onclick = function changer(e) {
  // Change the text with the one requested
  let item: ChildNode = document.querySelector(".jokes_paragraph")
  let new_tag: HTMLParagraphElement = document.createElement("p"); // Creating the tag element
  let new_text: Text = document.createTextNode("Text changed");
  new_tag.appendChild(new_text);
  paragraph.replaceChild(new_tag, item.childNodes[0]);

  // Changing the background
  let containerStyle = container.style;
  let random:number = Math.floor(Math.random()*3 + 1)
  let random_name:string = "index" + random + ".svg"
  let random_url:string = `url("${random_name}")`
  console.log(random_url)
  containerStyle.backgroundImage = random_url 
};
