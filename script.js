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

    localStorage.setItem("theme", lightMode ? "light" : "dark");
});