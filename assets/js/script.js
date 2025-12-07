/* ------------------------------------
   1. Smooth Scrolling for Navigation
-------------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* ------------------------------------
   2. Contact Form Validation
-------------------------------------- */

const form = document.querySelector("#contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.querySelector("#name").value.trim();
        let email = document.querySelector("#email").value.trim();
        let message = document.querySelector("#message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        alert("Message sent successfully!");
        form.reset();
    });
}

/* ------------------------------------
   3. Fade-in Animation for Sections
-------------------------------------- */

const sections = document.querySelectorAll("section");

const revealSection = () => {
    sections.forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (secTop < triggerPoint) {
            sec.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);
