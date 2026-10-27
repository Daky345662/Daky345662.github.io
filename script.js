const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const revealTargets = document.querySelectorAll(
    '.section-heading, .info-card, .skill-card, .project-card, .contact-panel'
);

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    revealTargets.forEach((element) => {
        element.classList.add('reveal');
        revealObserver.observe(element);
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    const navObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((link) => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                    });
                }
            });
        },
        { rootMargin: '-45% 0px -50% 0px' }
    );

    document.querySelectorAll('main section[id]').forEach((section) => navObserver.observe(section));
} else {
    revealTargets.forEach((element) => element.classList.add('is-visible'));
}
