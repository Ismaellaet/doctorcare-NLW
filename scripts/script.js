window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
    showNavigation();
    showBackToTopButton();

    activeMenuAtCurrentSection(home);
    activeMenuAtCurrentSection(services);
    activeMenuAtCurrentSection(about);
}

function activeMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionEndsAt = sectionTop + sectionHeight;

    const sectionTopReachOrPassedTarget = targetLine >= sectionTop;
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    const sectionBoundaries = sectionTopReachOrPassedTarget && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute("id");
    const sectionElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    sectionElement.classList.remove("active");
    if (sectionBoundaries) {
        sectionElement.classList.add("active");
    }
}

function showNavigation() {
    const nav = document.querySelector("nav");

    if (scrollY > 0) {
        nav.classList.add("scroll")
    } else {
        nav.classList.remove("scroll")
    }
}

function showBackToTopButton() {
    if (scrollY > 500) {
        backToTopButton.classList.add("show")
    } else {
        backToTopButton.classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add("menu-expanded");
}

function closeMenu() {
    document.body.classList.remove("menu-expanded");
}

const customizationOfScrollReveal = {
    origin: "top",
    distance: "50px",
    duration: 700,
}

ScrollReveal(customizationOfScrollReveal)
    .reveal(`
        #home,
        #home img,
        #home .stats,
        #services,
        #services card,
        #about,
        #about header,
        #about .content`)