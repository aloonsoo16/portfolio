function applyTheme() {
  const theme = localStorage.getItem("theme") || "dark"; // Modo dark por defecto
  const body = document.body;
  const pathIcons = document.querySelectorAll(".path-icons"); // Obtener todos los iconos con esta clase
  const headIcon = document.querySelectorAll(".head-icon"); // Obtener todos los iconos de los encabezados y actualizar su color
  const svgRedirect = document.querySelectorAll(".redirect"); //Obtener con esta clase los iconos de Code Y Preview de la seccion  de proyectos
  const pathLanguage = document.querySelectorAll(".path-language"); // Obtener todos los iconos de los lenguajes de las cartas

  // Aplicar el tema según el valor en localStorage
  if (theme === "dark") {
    body.classList.add("bg-dark");
    body.classList.remove("bg-light");
  } else {
    body.classList.add("bg-light");
    body.classList.remove("bg-dark");
  }

  // Actualizar el color de cada icono
  pathIcons.forEach((element) => {
    const pathIcons = element.querySelector("path"); // Obtener el path de cada icono
    updatePath(theme, pathIcons); // Actualizar el path para tema oscuro
  });

  // Actualizar el color de cada icono
  headIcon.forEach((icon) => {
    const path = icon.querySelector("path"); // Obtener el path de cada icono
    updatePathIcon(theme, path); // Actualizar el path para tema oscuro
  });

  // Actualizar el color de cada icon SVG
  svgRedirect.forEach((svg) => {
    updateFillSvg(theme, svg); // Actualizar el fill del SVG según el tema
  });

  // Actualizar el color de cada icon SVG
  pathLanguage.forEach((lenguaje) => {
    updatepathLanguage(theme, lenguaje); // Actualizar el fill del SVG según el tema
  });
}

// Función para actualizar el path y el color del elemento
function updatepathLanguage(theme, pathLanguage) {
  if (pathLanguage) {
    if (theme === "dark") {
      pathLanguage.setAttribute("fill", "#ff00f2");
    } else {
      pathLanguage.setAttribute("fill", "#159A9C");
    }
  }
}

// Función para actualizar el path y el color del elemento
function updatePath(theme, pathIcons) {
  if (pathIcons) {
    if (theme === "dark") {
      pathIcons.setAttribute("fill", "aqua");
    } else {
      pathIcons.setAttribute("fill", "#FF8C00");
    }
  }
}

// Función para actualizar el path y el color de los iconos
function updatePathIcon(theme, path) {
  if (path) {
    if (theme === "dark") {
      path.setAttribute("fill", "white"); // Color para tema oscuro
    } else {
      path.setAttribute("fill", "black"); // Color para tema claro
    }
  }
}

// Función para actualizar el path y el color de los iconos
function updateFillSvg(theme, svg) {
  if (svg) {
    if (theme === "dark") {
      svg.setAttribute("fill", "aqua"); // Color para tema oscuro
    } else {
      svg.setAttribute("fill", "#FF8C00"); // Color para tema claro
    }
  }
}

//Llamar a la funcion para aplicar el tema
applyTheme();

function resetCSS() {
  //Funcion para resccargar el CSS
  const link = document.querySelector('link[rel="stylesheet"]');
  link.href = link.href.split("?")[0] + "?" + new Date().getTime(); // Forzar recarga del CSS
}

// Función para cambiar el tema
function cambiarTema(nuevoTema) {
  const body = document.body;

  if (nuevoTema === "light") {
    body.classList.remove("bg-dark");
    body.classList.add("bg-light");
    localStorage.setItem("theme", "light");
    resetCSS();
  } else {
    body.classList.remove("bg-light");
    body.classList.add("bg-dark");
    localStorage.setItem("theme", "dark");
    resetCSS();
  }

  // Actualizar el color de los iconos de los encabezados
  const headIcon = document.querySelectorAll(".head-icon");
  headIcon.forEach((icon) => {
    const path = icon.querySelector("path");
    updatePathIcon(nuevoTema, path); // Actualizar el path de los headIcon según el nuevo tema
  });

  // Actualizar el color de los iconos
  const pathIcons = document.querySelectorAll(".path-icons");
  pathIcons.forEach((element) => {
    const pathIcons = element.querySelector("path");
    updatePath(nuevoTema, pathIcons); // Actualizar el path de los headIcon según el nuevo tema
  });

  // Actualizar el color de los iconos Code y Preview en la seccion de proyectos
  const svgElements = document.querySelectorAll(".redirect"); // Selecciona todos los SVG
  svgElements.forEach((svg) => {
    updateFillSvg(nuevoTema, svg); // Actualiza el fill del SVG según el nuevo tema
  });

  const pathLanguage = document.querySelectorAll(".path-language");
  pathLanguage.forEach((lenguaje) => {
    updatepathLanguage(nuevoTema, lenguaje);
  });
}

//Cambiar a tema claro al hacer click en el item del dropdown del menu
document.getElementById("light").addEventListener("click", function (event) {
  event.preventDefault();

  const temaActual = localStorage.getItem("theme") || "dark"; // Obtiene el tema actual, por defecto es 'dark'

  if (temaActual !== "light") {
    cambiarTema("light"); // Cambia a tema claro
    resetCSS(); // Recarga el CSS solo si el tema actual no es claro
  } else {
    console.log("Ya estás en el tema claro, no es necesario recargar."); //Si el tema es claro, no se ejecuta la funcion
  }
});

//Cambiar a tema oscuro al hacer click en el item del dropdown del menu
document.getElementById("dark").addEventListener("click", function (event) {
  event.preventDefault();

  const temaActual = localStorage.getItem("theme") || "light"; // Obtiene el tema actual, por defecto es 'dark'

  if (temaActual !== "dark") {
    cambiarTema("dark"); // Cambia a tema oscuro
    resetCSS(); // Recarga el CSS solo si el tema actual no es oscuro
  }
});
