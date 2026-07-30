const CONFIG = {
  // Replace this with your Formspree endpoint when ready, for example:
  // formEndpoint: "https://formspree.io/f/abcdwxyz"
  formEndpoint: ""
};

const modal = document.getElementById("waitlistModal");
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.getElementById("mobileMenu");
const cursorGlow = document.querySelector(".cursor-glow");

function openModal() {
  if (typeof modal.showModal === "function") modal.showModal();
}

function closeModal() {
  if (modal.open) modal.close();
}

document.querySelectorAll("[data-open-waitlist]").forEach((button) => {
  button.addEventListener("click", () => {
    closeMenu();
    openModal();
  });
});

document.querySelector("[data-close-waitlist]").addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) closeModal();
});

function openMenu() {
  menuButton.setAttribute("aria-expanded", "true");
  mobileMenu.classList.add("open");
  mobileMenu.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  open ? closeMenu() : openMenu();
});

mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeModal();
  }
});

async function submitWaitlist(form) {
  const status = form.parentElement.querySelector(".form-status");
  const emailInput = form.querySelector('input[name="email"]');
  const email = emailInput.value.trim();

  if (!email) return;
  status.textContent = "SENDING…";

  try {
    if (CONFIG.formEndpoint) {
      const response = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      });
      if (!response.ok) throw new Error("Submission failed");
    } else {
      const saved = JSON.parse(localStorage.getItem("dremee_waitlist") || "[]");
      if (!saved.includes(email)) saved.push(email);
      localStorage.setItem("dremee_waitlist", JSON.stringify(saved));
    }

    form.reset();
    status.textContent = CONFIG.formEndpoint
      ? "WELCOME TO THE DREMEE WORLD."
      : "DEMO SAVED. CONNECT FORMSPREE TO RECEIVE REAL SIGNUPS.";
  } catch (error) {
    status.textContent = "PLEASE TRY AGAIN OR EMAIL HELLO@DREMEE.COM.";
  }
}

document.querySelectorAll("[data-waitlist-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitWaitlist(form);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll("details").forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.transform = `translate(${event.clientX - cursorGlow.offsetWidth / 2}px, ${event.clientY - cursorGlow.offsetHeight / 2}px)`;
  });
}
