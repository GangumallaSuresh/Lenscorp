/*
|--------------------------------------------------------------------------
| Custom Javascript code
|--------------------------------------------------------------------------
|
| Now that you configured your website, you can write additional Javascript
| code inside the following function. You might want to add more plugins and
| initialize them in this file.
|
*/

$(function () {
  var t = localStorage.getItem("theme") || 0;
  themeSwitcher();
  $(".theme-switcher").click(function () {
    if (t == 1) {
      t = 0;
      localStorage.setItem("theme", 0);
    } else {
      t = 1;
      localStorage.setItem("theme", 1);
    }
    themeSwitcher();
  });
  console.clear();
  console.log(t);

  function themeSwitcher() {
    if (t == 1) {
      $("body").addClass("dark").removeClass("light");
      $(".navbar-sun-light").attr("src", "assets/img/moon.svg");
      $(".logo-dark").attr("src", "assets/img/logo-light.png");
      $(".logo-light").attr("src", "assets/img/logo-dark.png");
      $(".social-bg-light")
        .addClass("social-bg-dark")
        .removeClass("social-bg-light");
      $(".slider-arrows-flash-dark")
        .addClass("slider-arrows-flash-light")
        .removeClass("slider-arrows-flash-dark");
      t = 1;
      localStorage.setItem("theme", 1);
      console.log(t);
    } else {
      $("body").removeClass("dark").addClass("light");
      $(".navbar-sun-light").attr("src", "assets/img/sun.svg");
      $(".logo-dark").attr("src", "assets/img/logo-dark.png");
      $(".logo-light").attr("src", "assets/img/logo-light.png");
      $(".social-bg-dark")
        .addClass("social-bg-light")
        .removeClass("social-bg-dark");
      $(".slider-arrows-flash-light")
        .addClass("slider-arrows-flash-dark")
        .removeClass("slider-arrows-flash-light");
      t = 0;
      localStorage.setItem("theme", 0);
      console.log(t);
    }
  }
});
