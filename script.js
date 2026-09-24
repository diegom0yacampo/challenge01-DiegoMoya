const yearElement = document.getElementById('year');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const newsletterButton = document.querySelector('.newsletter-box .btn');
const emailInput = document.getElementById('email');

if (newsletterButton && emailInput) {
  newsletterButton.addEventListener('click', () => {
    const email = emailInput.value.trim();

    if (!email) {
      emailInput.focus();
      emailInput.placeholder = 'Introduce tu email';
      return;
    }

    newsletterButton.textContent = '¡Listo!';
    newsletterButton.disabled = true;
    emailInput.value = '';
    emailInput.placeholder = 'Gracias por suscribirte';
  });
}
