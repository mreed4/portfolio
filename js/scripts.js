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

const returnToTop = () => {
  let returnButton = document.getElementById(`return-to-top`);

  window.onscroll = function () {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      returnButton.classList.remove(`hidden`);
      returnButton.classList.add(`fade`);
    } else {
      returnButton.classList.add(`hidden`);
    }
  };
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
  const iconMode = toggleButton.querySelector(`span.fas`);

  toggleButton.addEventListener(`click`, modeToggle);

  let mode = localStorage.getItem(`mode`);

  const modeDay = () => {
    body.removeAttribute(`class`);
    localStorage.setItem(`mode`, `day`);

    iconMode.classList.remove(`fa-sun`);
    window.setTimeout(() => {
      iconMode.classList.add(`fa-moon`);
    }, 25);
  };

  const modeNight = () => {
    body.classList.add(`night`);
    localStorage.setItem(`mode`, `night`);

    iconMode.classList.remove(`fa-moon`);
    window.setTimeout(() => {
      iconMode.classList.add(`fa-sun`);
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

const scrollIndicator = () => {
  /* 
  
  Scroll indicator
  https://www.geeksforgeeks.org/how-to-create-scroll-indicator-using-html-css-and-javascript/

*/
  window.addEventListener("scroll", moveScrollIndicator);
  const scrollIndicatorElt = document.getElementById("scrollIndicator");
  const maxHeight = window.document.body.scrollHeight - window.innerHeight;

  function moveScrollIndicator(e) {
    const percentage = (window.scrollY / maxHeight) * 100;
    scrollIndicatorElt.style.width = percentage + "%";
  }
};

const hoverSelf = () => {
  let self = document.getElementById(`self`);

  self.addEventListener(`mouseover`, () => {
    self.setAttribute(`src`, `./images/self-sq.jpg`);
    window.setTimeout(() => {
      self.classList.add(`fade`);
    }, 25);
    self.classList.remove(`fade`);
  });

  self.addEventListener(`mouseout`, () => {
    self.setAttribute(`src`, `./images/self-c.png`);
    window.setTimeout(() => {
      self.classList.add(`fade`);
    }, 25);
    self.classList.remove(`fade`);
  });
};

body.onload = function () {
  smoothScroll();
  moreInfo();
  dayNightToggle();
  externalLinks();
  returnToTop();
  /*
  hoverSelf();
  scrollIndicator();
  */
};
