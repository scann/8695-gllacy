var searchLink = document.querySelector(".btn-search");
var menuLink = document.querySelector(".btn-login");
var cartLink = document.querySelector(".btn-cart-full");

var feedbackLink = document.querySelector(".btn-feedback");
var feedbackForm = document.querySelector(".feedback-form");

var closeFeedbackForm = document.querySelector(".modal-content-close");

var overlay = document.querySelector(".modal-wrapper");

var map = document.querySelector(".map-block");

var authorName = document.querySelector("[name=feedback-author]");
var authorEmail = document.querySelector("[name=feedback-email]");
var authorComment = document.querySelector("[name=feedback-comment]");

var storageName = localStorage.getItem("authorName");
var storageEmail = localStorage.getItem("authorEmail");

if (searchLink) {
  searchLink.addEventListener("click", function(event) {
  event.preventDefault();
  });
}
if (menuLink) {
  menuLink.addEventListener("click", function(event) {
  event.preventDefault();
  });
}
if (cartLink) {
  cartLink.addEventListener("click", function(event) {
  event.preventDefault();
  });
}
if (feedbackLink) {
  feedbackLink.addEventListener("click", function(event) {
      event.preventDefault();
      overlay.classList.add("modal-wrapper-show");
      feedbackForm.classList.add("feedback-form-show");
      authorComment.value = "";
      if (storageName&&storageEmail) {
          authorName.value = storageName;
          authorEmail.value = storageEmail;
          authorComment.focus();
        } else if (storageName) {
            authorName.value = storageName;
            authorEmail.focus();
          } else authorName.focus();
  });
}
if (closeFeedbackForm) {
  closeFeedbackForm.addEventListener("click", function(event) {
        event.preventDefault();
        feedbackForm.classList.remove("feedback-form-show");
        overlay.classList.remove("modal-wrapper-show");
      });
}
if (feedbackForm) {
  feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault();
        localStorage.setItem("authorName", authorName.value);
        localStorage.setItem("authorEmail", authorEmail.value);
        feedbackForm.classList.remove("feedback-form-show");
        overlay.classList.remove("modal-wrapper-show");
  });
}
window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (feedbackForm.classList.contains("feedback-form-show")) {
            feedbackForm.classList.remove("feedback-form-show");
          }
          if (overlay.classList.contains("modal-wrapper-show")) {
            overlay.classList.remove("modal-wrapper-show");
          }
        }
});
if (map) {
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.9384,30.3300],
            zoom: 16,
            controls: ['smallMapDefaultSet']
        },
        {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([59.9386,30.3231], {
            hintContent: 'HTMLAcademy'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [218, 142],
            iconImageOffset: [-10, -52]
        });

    myMap.geoObjects.add(myPlacemark);
  });
}
