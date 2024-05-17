function changeLanguage(select) {
    var selectedOption = select.options[select.selectedIndex].value;
    var currentPath = window.location.pathname;

    var paths = {
        "/index.html": "/pages/brindex.html",
        "/pages/brindex.html": "/index.html",
        "/pages/encontact.html": "/pages/brcontact.html",
        "/pages/brcontact.html": "/pages/encontact.html",
        "/pages/enabout.html": "/pages/brabout.html",
        "/pages/brabout.html": "/pages/enabout.html"
    };

    // Desabilitar a opção apropriada
    if (currentPath === "/index.html" || currentPath === "/pages/encontact.html" || currentPath === "/pages/enabout.html") {
        select.options[1].disabled = false; // Desabilita "EN"
        select.options[2].disabled = true; // Habilita "PT"
    } else if (currentPath === "/pages/brindex.html" || currentPath === "/pages/brcontact.html" || currentPath === "/pages/brabout.html") {
        select.options[1].disabled = true; // Habilita "EN"
        select.options[2].disabled = false; // Desabilita "PT"
    }

    // Redirecionar para a página apropriada
    if (selectedOption === "pt-br" && paths[currentPath]) {
        window.location.href = paths[currentPath];
    } else if (selectedOption === "en-us" && paths[currentPath]) {
        window.location.href = paths[currentPath];
    }
}

// Executar a função ao carregar a página para definir a opção correta como desabilitada
window.onload = function() {
    var languageSelect = document.getElementById("language-select");
    changeLanguage(languageSelect);
};


function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var mailtoLink = "mailto:rafael.longas1989@gmail.com?subject=Contato&body=" +
        "Nome: " + name + "%0D%0A" +
        "Email: " + email + "%0D%0A" +
        "Mensagem: " + message;

    window.location.href = mailtoLink;
}

window.onload = function() {
    var languageSelect = document.getElementById("language-select");
    changeLanguage(languageSelect);
};
