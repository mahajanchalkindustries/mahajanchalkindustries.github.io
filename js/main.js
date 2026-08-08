/* =========================================================
   MAHAJAN CHALK INDUSTRIES
   Main JavaScript
   ========================================================= */


/* =========================
   MOBILE NAVIGATION
   ========================= */

const menuButton =
    document.getElementById("mobile-menu-button");

const mobileNav =
    document.getElementById("mobile-nav");


if (menuButton && mobileNav) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            mobileNav.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

        menuButton.textContent =
            isOpen ? "×" : "☰";

    });


    /*
     * Close mobile navigation after
     * clicking a navigation link.
     */

    const mobileLinks =
        mobileNav.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.textContent = "☰";

        });

    });

}


/* =========================
   HERO SLIDESHOW
   ========================= */

const slides =
    document.querySelectorAll(".hero-slide");


if (slides.length > 1) {

    let currentSlide = 0;


    setInterval(() => {

        slides[currentSlide]
            .classList.remove("active");


        currentSlide =
            (currentSlide + 1) % slides.length;


        slides[currentSlide]
            .classList.add("active");

    }, 5000);

}