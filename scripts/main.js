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

const sidebar = () => {
    const sidebarIcon = document.getElementById("menu");
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("sidebarActive")
    if (sidebarIcon.classList.contains("bars")) {
        sidebar.classList.add("sidebar")
        sidebarIcon.classList.remove("bars");
        sidebarIcon.classList.add("x")


    } else {
        sidebarIcon.classList.remove("x");
        sidebarIcon.classList.add("bars")


    }
}