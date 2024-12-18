function applyTheme() {
  const theme = localStorage.getItem("theme") || "dark"; // Modo dark por defecto
  const body = document.body;
  const pathIcons = document.querySelectorAll(".path-icons");
  const headIcon = document.querySelectorAll(".head-icon");
  const svgRedirect = document.querySelectorAll(".redirect");
  const pathLanguage = document.querySelectorAll(".path-language");

  // Aplicar el tema según el valor en localStorage
  if (theme === "dark") {
    body.classList.add("bg-dark");
    body.classList.remove("bg-light");
  } else {
    body.classList.add("bg-light");
    body.classList.remove("bg-dark");
  }

  // Actualizar los iconos (no es necesario cambiar el color de cada icono aquí)
  pathIcons.forEach((element) => {
    const pathIcons = element.querySelector("path");
    updatePath(pathIcons);
  });

  headIcon.forEach((icon) => {
    const path = icon.querySelector("path");
    updatePathIcon(path);
  });

  svgRedirect.forEach((svg) => {
    updateFillSvg(svg);
  });

  pathLanguage.forEach((lenguaje) => {
    updatepathLanguage(lenguaje);
  });
}

// Función para actualizar el color de los iconos, no se necesita verificar el tema aquí
function updatepathLanguage(pathLanguage) {
  if (pathLanguage) {
    pathLanguage.setAttribute("fill", "#2B7B8C"); // Color fijo para el tema claro
  }
}

// Función para actualizar el color de los iconos de las rutas
function updatePath(pathIcons) {
  if (pathIcons) {
    pathIcons.setAttribute("fill", "#2B7B8C"); // Color fijo para el tema claro
  }
}

// Función para actualizar el color de los iconos de encabezado
function updatePathIcon(path) {
  if (path) {
    const theme = localStorage.getItem("theme") || "dark";
    if (theme === "dark") {
      path.setAttribute("fill", "azure"); // Azul (azure) para el tema oscuro
    } else {
      path.setAttribute("fill", "black"); // Negro para el tema claro
    }
  }
}

// Función para actualizar el color de los iconos SVG
function updateFillSvg(svg) {
  if (svg) {
    svg.setAttribute("fill", "#BFBBB8"); // Color para el tema claro
  }
}

// Llamar a la función para aplicar el tema
applyTheme();

// Función para cambiar el tema
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

  // Actualizar los iconos de los encabezados
  const headIcon = document.querySelectorAll(".head-icon");
  headIcon.forEach((icon) => {
    const path = icon.querySelector("path");
    updatePathIcon(path);
  });

  // Actualizar los iconos
  const pathIcons = document.querySelectorAll(".path-icons");
  pathIcons.forEach((element) => {
    const pathIcons = element.querySelector("path");
    updatePath(pathIcons);
  });

  // Actualizar los iconos de los proyectos
  const svgElements = document.querySelectorAll(".redirect");
  svgElements.forEach((svg) => {
    updateFillSvg(svg);
  });

  const pathLanguage = document.querySelectorAll(".path-language");
  pathLanguage.forEach((lenguaje) => {
    updatepathLanguage(lenguaje);
  });
}

// Cambiar a tema claro al hacer click en el item del dropdown del menú
document.getElementById("light").addEventListener("click", function (event) {
  event.preventDefault();

  const temaActual = localStorage.getItem("theme") || "dark";

  if (temaActual !== "light") {
    cambiarTema("light"); // Cambia a tema claro
  } else {
    console.log("Ya estás en el tema claro, no es necesario recargar.");
  }
});

// Cambiar a tema oscuro al hacer click en el item del dropdown del menú
document.getElementById("dark").addEventListener("click", function (event) {
  event.preventDefault();

  const temaActual = localStorage.getItem("theme") || "light";

  if (temaActual !== "dark") {
    cambiarTema("dark"); // Cambia a tema oscuro
  }
});
