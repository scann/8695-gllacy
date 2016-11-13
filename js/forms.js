var feedbackLink = document.querySelector(".btn-feedback");
var feedbackForm = document.querySelector(".feedback-form");

var closeFeedbackForm = feedbackForm.querySelector(".modal-content-close");

var overlay = document.querySelector(".modal-overlay");
var warning = feedbackForm.querySelector(".feedback-warning");

var authorName = feedbackForm.querySelector("[name=feedback-author]");
var authorEmail = feedbackForm.querySelector("[name=feedback-email]");
var authorComment = feedbackForm.querySelector("[name=feedback-comment]");

var authorLabel = feedbackForm.querySelector(".author-label");
var emailLabel = feedbackForm.querySelector(".email-label");
var commentLabel = feedbackForm.querySelector(".comment-label");

var storage = localStorage.getItem("authorName");

feedbackLink.addEventListener("click", function(event) {
      event.preventDefault();
      feedbackForm.classList.add("feedback-form-show");
      overlay.classList.add("modal-overlay-show");

      if (storage) {
          authorName.value = storage;
          authorEmail.focus();
        } else {
          authorName.focus();
        }
});
authorName.addEventListener("change", function(event) {
  if (authorName) {
    event.preventDefault();
    authorLabel.classList.add("label-hide");
  } else {
     authorLabel.classList.remove("label-hide");
  }
});
authorEmail.addEventListener("change", function(event) {
  if (authorEmail) {
    event.preventDefault();
    emailLabel.classList.add("label-hide");
  } else {
     emailLabel.classList.remove("label-hide");
  }
});
authorComment.addEventListener("change", function(event) {
  if (authorComment) {
    event.preventDefault();
    commentLabel.classList.add("label-hide");
  } else {
     commentLabel.classList.remove("label-hide");
  }
});
closeFeedbackForm.addEventListener("click", function(event) {
        event.preventDefault();
        feedbackForm.classList.remove("feedback-form-show");
        overlay.classList.remove("modal-overlay-show");
      });
feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (!authorName.value || !authorEmail.value) {
          event.preventDefault();
          warning.classList.add("feedback-warning-show");
        } else {
          localStorage.setItem("authorName", authorName.value);
        }
});
window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (feedbackForm.classList.contains("feedback-form-show")) {
            feedbackForm.classList.remove("feedback-form-show");
          }
          if (overlay.classList.contains("modal-overlay-show")) {
            overlay.classList.remove("modal-overlay-show");
          }
        }
      });
