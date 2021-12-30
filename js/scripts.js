const body = document.body;

const smoothScroll = () => {
  /*

Smooth scrolling navigation for every anchor link
https://tinyurl.com/2wxpcvrd

*/

  let anchorSelector = 'a[href^="#"]';
  let anchorList = document.querySelectorAll(anchorSelector);

  anchorList.forEach((link) => {
    link.onclick = function (e) {
      e.preventDefault();

      let destination = document.querySelector(this.hash);

      destination.scrollIntoView({
        behavior: "smooth",
      });
    };
  });
};

const moreInfo = () => {
  /*

Show more - used in About, Works, etc.

*/

  const moreInfoButtons = document.querySelectorAll(`.more-info-button`);
  const moreInfoSections = document.querySelectorAll(`.more-info`);

  for (let i = 0; i < moreInfoButtons.length; i++) {
    moreInfoButtons[i].addEventListener(`click`, () => {
      moreInfoSections[i].classList.remove(`hidden`);
      moreInfoButtons[i].classList.add(`hidden`);

      window.setTimeout(() => {
        moreInfoSections[i].classList.add(`fade`);
      }, 25);
    });
  }
};

const dayNightToggle = () => {
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
};

const externalLinks = () => {
  /* 
  
  Opens all external links in new tab
  https://gist.github.com/CrocoDillon/7989214

*/

  let links = [...document.links].forEach((link) => {
    if (link.hostname != window.location.hostname) {
      link.target = "_blank";
    }
  });
};

body.onload = function () {
  smoothScroll();
  moreInfo();
  dayNightToggle();
  externalLinks();
};
