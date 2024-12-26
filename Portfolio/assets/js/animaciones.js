document
  .getElementById("spinner-button")
  .addEventListener("click", function () {
    const spinnerButton = this;
    const spinner = document.getElementById("spinner");
    const line = document.querySelector(".line");
    const lineContenedor = document.querySelector(".line-container");
    const downloadIcon = document.querySelector(".download-icon");
    const pathDownload = document.getElementById("path-download");
    const dropdown = document.getElementById("dropdown-menu");

    // Deshabilitar interacción con el spinner button y el icono-swap
    dropdown.style.pointerEvents = "none";
    spinnerButton.style.pointerEvents = "none";

    const fill = document.createElement("div");
    fill.classList.add("fill");
    spinner.appendChild(fill);

    // Cambiar visibilidad del contenedor de la línea a visible ANTES de la animación
    lineContenedor.style.visibility = "visible";

    // Reiniciar la animación de la línea del contenedor 'line-container'
    line.style.animation = "none";
    line.offsetHeight;
    line.style.animation = "moveLine 4s forwards";

    setTimeout(() => {
      fill.style.opacity = "1";

      // Hacer visible y que tenga opacidad la line del contenedor 'line-container'
      line.style.visibility = "visible";
      line.style.opacity = "1";

      downloadIcon.style.animation = "down 2s forwards";
      spinner.style.animationPlayState = "paused";
      spinner.style.borderTop = "0px";

      setTimeout(() => {
        line.style.opacity = "0";
      }, 2000);

      const animacionlineEnd = function () {
        fill.style.border = "3px solid #48ff00"; // Establecer color fijo
        downloadIcon.style.animation = "up 2s forwards";
        pathDownload.setAttribute(
          "d",
          "m17.582,8.461c.573.597.555,1.547-.043,2.121l-4.605,4.424c-.668.659-1.552.989-2.438.989s-1.774-.33-2.451-.991l-1.547-1.388c-.616-.554-.667-1.502-.113-2.118.554-.615,1.5-.668,2.119-.113l1.592,1.43c.237.23.555.232.746.042l4.62-4.438c.597-.574,1.545-.557,2.121.042Zm6.418,3.539c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.962-4.037-9-9-9S3,7.038,3,12s4.037,9,9,9,9-4.038,9-9Z"
        );
        pathDownload.setAttribute("fill", "#48ff00"); // Color fijo para path

        setTimeout(() => {
          downloadIcon.style.animation = "right 2s forwards";
          downloadIcon.addEventListener(
            "animationend",
            function () {
              fill.style.opacity = "0";
              fill.remove();
              pathDownload.setAttribute(
                "d",
                "M16,12v2c0,1.103-.897,2-2,2h-4c-1.103,0-2-.897-2-2v-2H0v9c0,1.654,1.346,3,3,3H21c1.654,0,3-1.346,3-3V12h-8Zm6,9c0,.552-.448,1-1,1H3c-.552,0-1-.448-1-1v-7H6c0,2.206,1.794,4,4,4h4c2.206,0,4-1.794,4-4h4v7ZM10.586,10.414l-3.293-3.293,1.414-1.414,2.293,2.293V0h2V8l2.293-2.293,1.414,1.414-3.293,3.293c-.39,.39-.902,.585-1.414,.585s-1.024-.195-1.414-.585Z"
              );
              pathDownload.setAttribute("fill", "#2B7B8C"); // Color fijo para path
              downloadIcon.style.opacity = "1";
              downloadIcon.style.animation = "left 2s forwards";
            },
            { once: true }
          );
        }, 3000);

        const url = "assets/archivos/CV Alonso Mangas Alfayate.pdf";
        const link = document.createElement("a");
        link.href = url;
        link.download = "CV Alonso Mangas Alfayate";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Volver a habilitar la interacción después de 5 segundos
        setTimeout(() => {
          spinnerButton.style.pointerEvents = "auto";
          spinner.style.animationPlayState = "running";
          spinner.style.borderTop = "3px solid #BFBBB8"; // Color fijo
          dropdown.style.pointerEvents = "auto";
        }, 5000);
      };

      line.removeEventListener("animationend", animacionlineEnd);
      line.addEventListener("animationend", animacionlineEnd, { once: true });
    }, 100);
  });
