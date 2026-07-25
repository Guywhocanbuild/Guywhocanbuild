// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const crumbs = document.getElementById('crumbs');
if (navToggle && crumbs) {
  navToggle.addEventListener('click', () => crumbs.classList.toggle('open'));
}

// Contact form — submits to Google Forms via a hidden iframe so the
// page never navigates away. Cross-origin means we can't read the
// actual response, so we just trust submission fired on iframe load.
const contactForm = document.getElementById('contactForm');
const hiddenIframe = document.getElementById('hidden_iframe');
let formSubmitted = false;

if (contactForm && hiddenIframe) {
  contactForm.addEventListener('submit', () => {
    formSubmitted = true;
    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Sending…';
    btn.disabled = true;
  });

  hiddenIframe.addEventListener('load', () => {
    if (!formSubmitted) return; // ignore the initial blank load
    const msg = document.getElementById('formMsg');
    const btn = document.getElementById('submitBtn');
    msg.className = 'ok';
    msg.textContent = "Thanks — message sent. I'll get back to you soon.";
    contactForm.reset();
    btn.textContent = 'Send message →';
    btn.disabled = false;
    formSubmitted = false;
  });
}

