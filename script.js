document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("project-image");

    img.addEventListener("click", () => {
        const rect = img.getBoundingClientRect();
        const clone = img.cloneNode(true);

        // Posición inicial
        clone.style.position = "fixed";
        clone.style.top = rect.top + "px";
        clone.style.left = rect.left + "px";
        clone.style.width = rect.width + "px";
        clone.style.height = rect.height + "px";
        clone.style.margin = 0;
        clone.style.zIndex = 9999;
        clone.classList.add("image-overlay");

        document.body.appendChild(clone);

        // Forzar repaint
        clone.getBoundingClientRect();

        // Expandir
        clone.style.top = "0";
        clone.style.left = "0";
        clone.style.width = "100vw";
        clone.style.height = "100vh";

        // Redirigir luego de la animación
        setTimeout(() => {
            window.location.href = img.dataset.url;
        }, 650);
    });
});