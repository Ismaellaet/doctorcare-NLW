function fixed() {
    const nav = document.querySelector("nav");

    if (scrollY > 0) {
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
    }
}

function openMenu() {
    document.body.classList.add("menu-expanded");
}

function closeMenu() {
    document.body.classList.remove("menu-expanded")
}