// Preloader script

window.addEventListener("load", function (event) {
  let preloaderActivate = document.querySelector(".preloader-activate");
  let openTmPreloader = document.querySelector('.open_tm_preloader');

  setTimeout(function () {
    preloaderActivate.classList.remove("preloader-active");
    openTmPreloader.classList.add('loaded');
  }, 500);
});

// Preloader script
