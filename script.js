document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    // === Mobile Menu Toggle ===
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // === Typing Animation ===
    const typingElement = document.getElementById('typing');
    const words = ["Graphic Designer", "Web Designer", "AI Tools Developer", "E-book Creator", "Portfolio Expert"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = words[wordIndex];
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            typingElement.innerHTML = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            typingElement.innerHTML = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && letterIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            currentWord = words[wordIndex];
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();

    // === Scroll Spy: Highlight active nav link ===
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});

