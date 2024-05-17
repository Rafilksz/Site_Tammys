var currentImageIndex = 0;
var images = [
  "/assets/img/album_1.png",
  "/assets/img/album_2.png",
  "/assets/img/album_3.png",
  "/assets/img/album_4.png",
  "/assets/img/album_5.png",
  "/assets/img/album_6.png"
];

function openLightbox(index) {
  currentImageIndex = index;
  document.getElementById("lightbox-img").src = images[index];
  document.getElementById("lightbox").style.display = "flex";
  document.addEventListener("keydown", keyboardNavigation);
}

function closeLightbox(event) {
  if (event.target === event.currentTarget || event.target.classList.contains('close')) {
    document.getElementById("lightbox").style.display = "none";
    document.removeEventListener("keydown", keyboardNavigation);
  }
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  document.getElementById("lightbox-img").src = images[currentImageIndex];
}

function keyboardNavigation(event) {
  if (event.key === "ArrowLeft") {
    changeImage(-1);
  } else if (event.key === "ArrowRight") {
    changeImage(1);
  } else if (event.key === "Escape") {
    closeLightbox({target: document.getElementById("lightbox")});
  }
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
