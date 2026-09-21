const toggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");

    toggle.textContent = "☾";

    toggle.setAttribute("aria-label", "Switch to dark mode");
}

toggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const lightMode = document.body.classList.contains("light-mode");

    toggle.textContent = lightMode ? "☾" : "☼";

    toggle.setAttribute(
        "aria-label",
        lightMode ? "Switch to dark mode" : "Switch to light mode"
    );

    localStorage.setItem(
        "theme",
        lightMode ? "light" : "dark"
    );

});


document.querySelectorAll(".gallery-image").forEach((galleryImage) => {

    const img = galleryImage.querySelector("img");

    galleryImage.addEventListener("mouseenter", () => {

        const zoom = document.createElement("img");

        zoom.src = img.src;
        zoom.className = "gallery-zoom";
        zoom.alt = "";

        zoom.style.opacity = "0";
        zoom.style.transform = "translate(-50%, -50%) scale(0.9)";

        document.body.appendChild(zoom);

        const rect = galleryImage.getBoundingClientRect();

        zoom.style.left = `${rect.left + rect.width / 2}px`;
        zoom.style.top = `${rect.top + rect.height / 2}px`;

        requestAnimationFrame(() => {
            zoom.style.opacity = "1";
            zoom.style.transform = "translate(-50%, -50%) scale(1)";
        });

        galleryImage._zoom = zoom;

    });

    galleryImage.addEventListener("mouseleave", () => {

        if (galleryImage._zoom) {
            galleryImage._zoom.remove();
            galleryImage._zoom = null;
        }

    });

});