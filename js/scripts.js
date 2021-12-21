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
// https://youtu.be/wodWDIdV9BY
const toggle = document.querySelector(`button.toggle`);
const body = document.body;
const icon = toggle.querySelector(`i.em`);

toggle.addEventListener(`click`, modeToggle);

let mode = localStorage.getItem(`mode`);

const modeDay = () => {
  /*
  body.classList.remove(`night`);
  */
  body.removeAttribute(`class`);
  localStorage.setItem(`mode`, `day`);

  icon.classList.remove(`em-sunny`);
  window.setTimeout(() => {
    icon.classList.add(`em-new_moon`);
  }, 25);
};

const modeNight = () => {
  body.classList.add(`night`);
  localStorage.setItem(`mode`, `night`);

  icon.classList.remove(`em-new_moon`);
  window.setTimeout(() => {
    icon.classList.add(`em-sunny`);
  }, 25);
};

if (mode === `night`) {
  modeNight();
}

function modeToggle() {
  mode = localStorage.getItem(`mode`);
  if (!body.classList.contains(`night`)) {
    modeNight();
  } else {
    modeDay();
  }
}

// Opens all external links in new tab
// https://gist.github.com/CrocoDillon/7989214
let links = [...document.links].forEach((link) => {
  if (link.hostname != window.location.hostname) {
    link.target = "_blank";
  }
});
