console.log("Hair Lounge website loaded.");

// Mobile navigation
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.classList.toggle("active", isOpen);
    menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");
        menuBtn.setAttribute("aria-label", "Open menu");
    });
});

// Smooth navigation + close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Close mobile menu
        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");
        menuBtn.setAttribute("aria-label", "Open menu");
    });
});


// Service card → WhatsApp booking
document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("click", () => {
        const service = card.dataset.service;

        const message = `Hi Hitesh,

I'd like to book an appointment for ${service} at Hair Lounge.

Please let me know the availability.`;

        const whatsappURL =
            `https://wa.me/919877618428?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    });
});
