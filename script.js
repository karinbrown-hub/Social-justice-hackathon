// Add JavaScript for interactivity, like scrolling animations
// For example, you can use a library like ScrollReveal:
// https://scrollrevealjs.org/

// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    reset: false,
});

// Animate elements on scroll
sr.reveal('.project-grid', {delay: 200});
sr.reveal('#making-impact .impact-grid', {delay: 400});
sr.reveal('#community', {delay: 600});
sr.reveal('#insights .insights-grid', {delay: 800});
sr.reveal('#connect', {delay: 1000});

// Additional JavaScript for other features
// (e.g., project card interactions, form submissions)