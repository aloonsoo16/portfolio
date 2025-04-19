// Aplicar el tema antes de que la página se renderice
function applyTheme() {
  const theme = localStorage.getItem("theme") || "dark"; // Modo dark por defecto
  const body = document.body;

  // Aplicar el tema antes de mostrar la página
  if (theme === "dark") {
    body.classList.add("bg-dark");
    body.classList.remove("bg-light");
  } else {
    body.classList.add("bg-light");
    body.classList.remove("bg-dark");
  }

  // Marcar el body como cargado después de un pequeño delay
  setTimeout(() => {
    body.classList.add("theme-loaded");
  }, 50); // Pequeño retraso para asegurar la aplicación del tema

  // Actualizar los iconos de la interfaz
  updateIcons();
}

// Actualizar los iconos según el tema
function updateIcons() {
  const pathIcons = document.querySelectorAll(".path-icons path");
  const headIcon = document.querySelectorAll(".head-icon path");
  const svgRedirect = document.querySelectorAll(".redirect");
  const pathLanguage = document.querySelectorAll(".path-language");
  const theme = localStorage.getItem("theme") || "dark";

  pathIcons.forEach((icon) => updatePath(icon));
  headIcon.forEach((icon) => updatePathIcon(icon, theme));
  svgRedirect.forEach((svg) => updateFillSvg(svg));
  pathLanguage.forEach((lang) => updatepathLanguage(lang));
}

// Función para actualizar el color de los iconos
function updatepathLanguage(element) {
  if (element) element.setAttribute("fill", "#0891b2");
}

function updatePath(element) {
  if (element) element.setAttribute("fill", "#0891b2");
}

function updatePathIcon(element, theme) {
  if (element) {
    element.setAttribute("fill", theme === "dark" ? "#ffffff" : "black");
  }
}

function updateFillSvg(element) {
  if (element) element.setAttribute("fill", "#78716c");
}

// Cambiar el tema y actualizar todo
function cambiarTema(nuevoTema) {
  const body = document.body;

  if (nuevoTema === "light") {
    body.classList.remove("bg-dark");
    body.classList.add("bg-light");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("bg-light");
    body.classList.add("bg-dark");
    localStorage.setItem("theme", "dark");
  }

  updateIcons();
}

// Evento para cambiar a tema claro
document.getElementById("light").addEventListener("click", (event) => {
  event.preventDefault();
  if (localStorage.getItem("theme") !== "light") cambiarTema("light");
});

// Evento para cambiar a tema oscuro
document.getElementById("dark").addEventListener("click", (event) => {
  event.preventDefault();
  if (localStorage.getItem("theme") !== "dark") cambiarTema("dark");
});

// Aplicar el tema antes de que la página sea visible
document.addEventListener("DOMContentLoaded", applyTheme);
