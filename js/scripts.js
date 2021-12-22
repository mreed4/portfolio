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

const body = document.body;

/*



Show more info in "About"



*/

const moreInfoButton = document.querySelector(`#more-info-button`);
const moreInfoSection = document.querySelector(`#more-info`);

moreInfoButton.addEventListener(`click`, () => {
  moreInfoSection.removeAttribute(`class`);
  moreInfoButton.classList.add(`hidden`);
  window.setTimeout(() => {
    moreInfoSection.classList.add(`fade`);
  }, 25);
});

/*



Day/night toggle
https://youtu.be/wodWDIdV9BY



*/

const toggleButton = document.querySelector(`#toggle-button`);
const iconMode = toggleButton.querySelector(`i.em`);

toggleButton.addEventListener(`click`, modeToggle);

let mode = localStorage.getItem(`mode`);

const modeDay = () => {
  body.removeAttribute(`class`);
  localStorage.setItem(`mode`, `day`);

  iconMode.classList.remove(`em-sunny`);
  window.setTimeout(() => {
    iconMode.classList.add(`em-new_moon`);
  }, 25);
};

const modeNight = () => {
  body.classList.add(`night`);
  localStorage.setItem(`mode`, `night`);

  iconMode.classList.remove(`em-new_moon`);
  window.setTimeout(() => {
    iconMode.classList.add(`em-sunny`);
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

/* 

Opens all external links in new tab
// https://gist.github.com/CrocoDillon/7989214

*/

let links = [...document.links].forEach((link) => {
  if (link.hostname != window.location.hostname) {
    link.target = "_blank";
  }
});
