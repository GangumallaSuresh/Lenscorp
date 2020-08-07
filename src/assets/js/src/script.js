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

  var myVar;

  function popupshow() {
    myVar = setTimeout(() => {
      $(".custom-popup").addClass("show");
    }, 5000);
  }

  function popuphide() {
    clearTimeout(myVar);
  }

  function themeSwitcher() {
    if (t == 1) {
      $("body").addClass("dark").removeClass("light");
      $(".navbar-sun-light").attr("src", "assets/img/sunl.svg");
      $(".logo-dark").attr("src", "assets/img/logo-light.png");
      $(".logo-light").attr("src", "assets/img/logo-dark.png");
      $(".social-bg-light")
        .addClass("social-bg-dark")
        .removeClass("social-bg-light");
      $(".slider-arrows-flash-dark")
        .addClass("slider-arrows-flash-light")
        .removeClass("slider-arrows-flash-dark");
      $(".venture-header").css(
        "background-image",
        "url(assets/img/ventures.png)"
      );
      $(".connect-header").css(
        "background-image",
        "url(assets/img/contact.png)"
      );
      $(".careers-header").css(
        "background-image",
        "url(assets/img/careers.png)"
      );
      $(".portal-header").css("background-image", "url(assets/img/portal.png)");
      $(".scroll").attr("src", "assets/img/scroll.gif");
      $(".custom-popup").removeClass("show");
      popuphide();
      t = 1;
      localStorage.setItem("theme", 1);
      console.log(t);
    } else {
      $("body").removeClass("dark").addClass("light");
      $(".navbar-sun-light").attr("src", "assets/img/moond.svg");
      $(".logo-dark").attr("src", "assets/img/logo-dark.png");
      $(".logo-light").attr("src", "assets/img/logo-light.png");
      $(".social-bg-dark")
        .addClass("social-bg-light")
        .removeClass("social-bg-dark");
      $(".slider-arrows-flash-light")
        .addClass("slider-arrows-flash-dark")
        .removeClass("slider-arrows-flash-light");
      $(".venture-header").css(
        "background-image",
        "url(assets/img/venturesl.png)"
      );
      $(".connect-header").css(
        "background-image",
        "url(assets/img/contactl.png)"
      );
      $(".careers-header").css(
        "background-image",
        "url(assets/img/careersl.png)"
      );
      $(".portal-header").css(
        "background-image",
        "url(assets/img/portall.png)"
      );
      $(".scroll").attr("src", "assets/img/scrolll.gif");
      popupshow();
      t = 0;
      localStorage.setItem("theme", 0);
      console.log(t);
    }
  }

  var offset = $(".theme-switcher").offset();
  var posX = offset.left - $(window).scrollLeft();
  var widthX = $(".custom-popup").width();

  if (posX - widthX > 0) $(".custom-popup").css("left", posX - widthX);
});
