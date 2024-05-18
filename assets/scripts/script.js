var currentImageIndex = 0;
var images = [];

document.addEventListener("DOMContentLoaded", function() {
  var imageElements = document.querySelectorAll('.images-main-container img');
  images = Array.from(imageElements).map(img => img.src);
});

function openLightbox(index) {
  currentImageIndex = index;
  document.getElementById("lightbox-img").src = images[index];
  document.getElementById("lightbox").style.display = "flex";
  document.addEventListener("keydown", keyboardNavigation);
  addTouchListeners();
}

function closeLightbox(event) {
  if (event.target === event.currentTarget || event.target.classList.contains('close')) {
    document.getElementById("lightbox").style.display = "none";
    document.removeEventListener("keydown", keyboardNavigation);
    removeTouchListeners();
  }
}

function changeImage(direction) {
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentImageIndex];
}

function keyboardNavigation(event) {
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    changeImage(1);
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    changeImage(-1);
  } else if (event.key === "Escape") {
    closeLightbox(event);
  }
}

function addTouchListeners() {
  var lightbox = document.getElementById("lightbox");
  lightbox.addEventListener("touchstart", handleTouchStart, false);
  lightbox.addEventListener("touchmove", handleTouchMove, false);
}

function removeTouchListeners() {
  var lightbox = document.getElementById("lightbox");
  lightbox.removeEventListener("touchstart", handleTouchStart, false);
  lightbox.removeEventListener("touchmove", handleTouchMove, false);
}

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
  const firstTouch = evt.touches[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      changeImage(1);
    } else {
      changeImage(-1);
    }
  } else {
    if (yDiff > 0) {
      changeImage(1);
    } else {
      changeImage(-1);
    }
  }

  xDown = null;
  yDown = null;
}

// EmailJS initialization
(function() {
  emailjs.init("YOUR_USER_ID");
})();

function changeLanguage(select) {
  var selectedOption = select.options[select.selectedIndex].value;
  var currentPath = window.location.pathname;

  var paths = {
    "/index.html": "/pages/brindex.html",
    "/pages/brindex.html": "/index.html",
    "/pages/encontact.html": "/pages/brcontact.html",
    "/pages/brcontact.html": "/pages/encontact.html",
    "/pages/enabout.html": "/pages/brabout.html",
    "/pages/brabout.html": "/pages/enabout.html",
    "/pages/enalbum1.html":"/pages/bralbum1.html",
    "/pages/enalbum2.html":"/pages/bralbum2.html",
    "/pages/enalbum3.html":"/pages/bralbum3.html",
    "/pages/enalbum4.html":"/pages/bralbum4.html",
    "/pages/enalbum5.html":"/pages/bralbum5.html",
    "/pages/enalbum6.html":"/pages/bralbum6.html",
    "/pages/bralbum1.html":"/pages/enalbum1.html",
    "/pages/bralbum2.html":"/pages/enalbum2.html",
    "/pages/bralbum3.html":"/pages/enalbum3.html",
    "/pages/bralbum4.html":"/pages/enalbum4.html",
    "/pages/bralbum5.html":"/pages/enalbum5.html",
    "/pages/bralbum6.html":"/pages/enalbum6.html",
  };

  if (selectedOption === "pt-br" && paths[currentPath]) {
    window.location.href = paths[currentPath];
  } else if (selectedOption === "en-us" && paths[currentPath]) {
    window.location.href = paths[currentPath];
  }
}

function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var templateParams = {
    from_name: name,
    from_email: email,
    message: message
  };

  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Mensagem enviada com sucesso!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Ocorreu um erro ao enviar a mensagem.');
    });
}

window.onload = function() {
  var languageSelect = document.getElementById("language-select");
  changeLanguage(languageSelect);
};
