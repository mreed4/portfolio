/*
let discord = document.getElementById(`discord`);

discord.addEventListener(`mouseover`, function () {
  discord.textContent = `mreed#7521`;
  discord.onclick = function() {
    document.execCommand
  }
});

discord.addEventListener(`mouseout`, function () {
  discord.textContent = `Discord`;
});
*/

// Day/night toggle
const toggle = document.querySelector(`button.toggle`);
toggle.addEventListener(`click`, themeToggle);

function themeToggle() {
  let body = document.body;

  if (!body.classList.contains(`night`)) {
    body.classList.add(`night`);
  } else {
    body.classList.remove(`night`);
  }
}

// Opens all external links in new tab
// https://gist.github.com/CrocoDillon/7989214
let links = [...document.links].forEach((link) => {
  if (link.hostname != window.location.hostname) {
    link.target = "_blank";
  }
});
