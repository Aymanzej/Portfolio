const sections = document.querySelectorAll("section");
const typedIntro = document.getElementById("typed-intro");


const messages = [
  "Bienvenue sur mon portfolio.",
  "Je m'appelle Ayman ZEJLI, j'ai 21 ans.",
  "Étudiant à Polytech Clermont-Ferrand en Ingénierie Mathématiques et Data Science.",
  "Passionné par l’Intelligence Artificielle et l’analyse de données, en particulier dans le domaine sportif - football.",
  "N’hésitez pas à parcourir mon parcours, mes projets et à me contacter."
];


let charIndex = 0;
let msgIndex = 0;

function typeText() {
  if (msgIndex >= messages.length) {
    typedIntro.textContent = "";
    msgIndex = 0;
  }
  if (charIndex < messages[msgIndex].length) {
    typedIntro.textContent += messages[msgIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 50);
  } else {
    setTimeout(() => {
      charIndex = 0;
      typedIntro.textContent = "";
      msgIndex++;
      typeText();
    }, 1500);
  }
}



const downloadBtn = document.getElementById('download-report-btn');
const modal = document.getElementById('download-modal');
const closeBtn = document.getElementById('close-modal');

downloadBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if(e.target === modal) {
    modal.style.display = 'none';
  }
});






function showSection(id) {
  sections.forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onload = () => {
  showSection("about");
  typeText();
};

function sendMessage(e) {
  e.preventDefault();
  alert("📩 Merci pour votre message !");
}