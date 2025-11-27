function toggleTheme() {
    document.documentElement.classList.toggle("dark-mode");

    const isDark = document.documentElement.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Aplicar tema guardado en todas las páginas
window.onload = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        document.documentElement.classList.add("dark-mode");
    }
};
