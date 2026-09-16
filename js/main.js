// Real Estate Expert 360 — script commun à toutes les pages

document.addEventListener('DOMContentLoaded', () => {
  // Menu mobile
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => mainNav.classList.remove('open'));
    });
  }

  // Accordion (page Formations)
  const accItems = document.querySelectorAll('.acc-item');
  accItems.forEach((item) => {
    const header = item.querySelector('.acc-header');
    header.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      item.classList.toggle('open', !wasOpen);
      header.setAttribute('aria-expanded', !wasOpen ? 'true' : 'false');
    });
  });

  // Ouvre le premier bloc par défaut sur la page Formations
  if (accItems.length) {
    accItems[0].classList.add('open');
    accItems[0].querySelector('.acc-header').setAttribute('aria-expanded', 'true');
  }

  // Formulaire de contact statique (V1) : construit un lien mailto
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(contactForm);
      const nom = data.get('nom') || '';
      const agence = data.get('agence') || '';
      const email = data.get('email') || '';
      const tel = data.get('tel') || '';
      const message = data.get('message') || '';

      const subject = encodeURIComponent(`Contact site REE 360 — ${nom}`);
      const body = encodeURIComponent(
        `Nom : ${nom}\nSociété / agence : ${agence}\nEmail : ${email}\nTéléphone : ${tel}\n\nMessage :\n${message}`
      );
      window.location.href = `mailto:contact@realestateexpert360.fr?subject=${subject}&body=${body}`;
    });
  }
});
