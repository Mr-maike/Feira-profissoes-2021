// Evento header
    window.addEventListener("scroll", function () {
        var header = document.querySelector("nav");
        var logoName = document.getElementById("logoName");
        header.classList.toggle("bg-white", window.scrollY > 0);
        logoName.classList.toggle("text-black", window.scrollY > 0);
    })

    