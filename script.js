const modal = document.getElementById('waitlistModal');
const openButtons = document.querySelectorAll('[data-open-waitlist]');
const closeButton = document.querySelector('[data-close-waitlist]');

openButtons.forEach((button) => button.addEventListener('click', () => modal.showModal()));
closeButton.addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => {
  const rect = modal.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) modal.close();
});

function handleSignup(formId, statusId) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = new FormData(form).get('email').trim();
    if (!email) return;

    const saved = JSON.parse(localStorage.getItem('dremee_waitlist') || '[]');
    if (!saved.includes(email)) saved.push(email);
    localStorage.setItem('dremee_waitlist', JSON.stringify(saved));

    status.textContent = 'THANK YOU — YOU ARE ON THE DREMEE LIST.';
    form.reset();
  });
}

handleSignup('emailForm', 'formStatus');
handleSignup('modalEmailForm', 'modalFormStatus');

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
