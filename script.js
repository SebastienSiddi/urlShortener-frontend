let toggle = document.getElementById("toggle");
let body = document.body;
let header = document.getElementById("header");
let logoName = document.getElementById("name");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let inputUrl = document.getElementById("inputUrl");
let inputOption = document.getElementById("inputOption");
let logoSun = document.getElementById("logoSun");
let logoMoon = document.getElementById("logoMoon");


function setMode(mode) {
  body.className = mode;

  if (mode === "dark-mode") {
    body.style.backgroundColor = "#000000";
    header.style.backgroundColor = "#000000";
    header.style.borderBottom = "1px solid #6b6b6b";
    logoName.style.color = "#ffffff";
    h1.style.color = "#ffffff";
    h2.style.color = "#ffffff";
    inputUrl.style.backgroundColor = "#3b3b3b";
    inputOption.style.backgroundColor = "#3b3b3b";
    logoSun.src = "./images/sunwhite.png";
    logoMoon.src = "./images/moonwhite.png";
    
  } else {
    body.style.backgroundColor = "#ecece8";
    header.style.backgroundColor = "#ffffff";
    header.style.border = "none";
    logoName.style.color = "#000000";
    h1.style.color = "#000000";
    h2.style.color = "#000000";
    inputUrl.style.backgroundColor = "#dadacd";
    inputOption.style.backgroundColor = "#dadacd";   
  }
}

setMode("light-mode")

toggle.addEventListener("change", function () {
  if (this.checked) {
    setMode("dark-mode");
  } else {
    setMode("light-mode");
  }
});

const urlSubmit = async () => {
  let URL = document.querySelector("#inputUrl").value;
  return fetch("http://localhost:3000/urls/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ URL }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#shortenedUrl").href = URL;
      document.querySelector("#shortenedUrl").textContent = data.shortenedUrl;      
    });
};

const clearFields = () => {
  let url = document.querySelector("#inputUrl");
  url.value = '';    
}

document.querySelector("#btn-bananaLink").addEventListener("click", function () {
  urlSubmit()
  clearFields()
});



