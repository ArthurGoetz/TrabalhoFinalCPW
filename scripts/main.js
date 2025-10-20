/* Trocar tema da página (claro ou escuro) */
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const temalink = document.getElementById("tema");
// Função
function setTheme(Theme) {
  if (Theme === "dark") {
    temalink.href = "css/darkstyle.css";
    localStorage.setItem("tema", "dark");
  } else {
    temalink.href = "css/style.css";
    localStorage.setItem("tema", "light");
  }
}
// O que faz quando clicar
light.addEventListener("click", () => setTheme("light"));
dark.addEventListener("click", () => setTheme("dark"));

/*// Ao carregar a página, verifica se há um tema salvo
const savedTheme = localStorage.getItem("tema");
if (savedTheme) {
  setTheme(savedTheme);
}*/
