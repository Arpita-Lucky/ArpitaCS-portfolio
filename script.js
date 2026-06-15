// ── Eye-tracking pupils ──────────────────────────────
const pupils = document.getElementById('pupils');

document.addEventListener('mousemove', function (e) {
  const rect = pupils.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
  const maxMove = 5;
  pupils.style.transform = `translate(${Math.cos(angle) * maxMove}px, ${Math.sin(angle) * maxMove}px)`;
});

// ── Typewriter effect ────────────────────────────────
const roleTextElement = document.getElementById('role-text');
const cursorElement = document.getElementById('cursor');

const roles = [
  "Computer Science Student",
  "Enthusiast AI Engineer",
  "Associate Product Manager",
  "Web Developer",
  "UI/UX Designer",
  "Creative Developer",
  "Problem Solver",
  "Lifelong Learner"
];

let roleIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    roleTextElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    roleTextElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}

// Blinking cursor
setInterval(() => {
  cursorElement.style.opacity = cursorElement.style.opacity === '0' ? '1' : '0';
}, 500);

// ── Lamp toggle ──────────────────────────────────────
document.querySelector('.lamp-container').addEventListener('click', function () {
  this.classList.toggle('light-on');
});

// ── Resume download ──────────────────────────────────
document.querySelector('.resume-button').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'Arpita-Resume.pdf';
  link.download = 'Arpita-Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// ── Hamburger Menu Toggle ──────────────────────────
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('show');
  }
});

// Resume link in nav
document.getElementById('resume-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.resume-button').click();
});

// ── Start typewriter on load ─────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  typeEffect();
});

// Grab the elements
const popup = document.getElementById('custom-popup');
const closeBtn = document.querySelector('.close-btn');

// FUNCTION TO OPEN POPUP
// You can call this function inside any click event listener you want
function openPopup() {
  popup.classList.add('show');
}

// FUNCTION TO CLOSE POPUP
function closePopup() {
  popup.classList.remove('show');
}

// Close when clicking the "X" button
closeBtn.addEventListener('click', closePopup);

// Close when clicking anywhere outside the white box
popup.addEventListener('click', function (e) {
  if (e.target === popup) {
    closePopup();
  }
});

// Target your portrait wrapper element
const portrait = document.querySelector('.portrait-wrapper');

// Open the popup when the portrait is clicked
portrait.addEventListener('click', function() {
  openPopup();
});

// ── Contact Form (EmailJS) ─────────────────────────
(function() {
  emailjs.init('yWGH2ZtexiOrTD9-N'); // Your Public Key
})();