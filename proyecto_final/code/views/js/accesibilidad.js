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

// Tamaño base (px)
let fontSize = parseInt(localStorage.getItem("fontSize")) || 16;

// Límite máximo y mínimo
const MIN_SIZE = 10;
const MAX_SIZE = 26;

// Aplica el tamaño inicial
document.documentElement.style.fontSize = fontSize + "px";

// AUMENTAR tamaño
function increaseFont() {
    if (fontSize < MAX_SIZE) {
        fontSize++;
        document.documentElement.style.fontSize = fontSize + "px";
        localStorage.setItem("fontSize", fontSize);
    }
}

// DISMINUIR tamaño
function decreaseFont() {
    if (fontSize > MIN_SIZE) {
        fontSize--;
        document.documentElement.style.fontSize = fontSize + "px";
        localStorage.setItem("fontSize", fontSize);
    }
}

// RESETEAR tamaño
function resetFont() {
    fontSize = 16;
    document.documentElement.style.fontSize = "16px";
    localStorage.setItem("fontSize", 16);
}
