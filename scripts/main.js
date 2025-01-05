function langer() {
    const langBtn = document.getElementById("lang-btn");
    if (langBtn.innerHTML === "AZ") {
        langBtn.innerHTML = "EN"
        document.getElementById("home").innerHTML = "Home";
        document.getElementById("about").innerHTML = "About Us";
        document.getElementById("feature").innerHTML = "Projects";
        document.getElementById("pricing").innerHTML = "Team";
        document.getElementById("pages").innerHTML = "Contact";
    } else {
        langBtn.innerHTML = "AZ"
        document.getElementById("home").innerHTML = "Ana səhifə ";
        document.getElementById("about").innerHTML = "Haqqımızda";
        document.getElementById("feature").innerHTML = "Layihələr";
        document.getElementById("pricing").innerHTML = "Heyət";
        document.getElementById("pages").innerHTML = "Əlaqə";
    }
}