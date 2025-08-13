const themeButton = document.getElementById("toggleTheme");
const rootElement = document.documentElement;

themeButton.addEventListener("click", () => {
  if (rootElement.classList.contains("dark")) {
    rootElement.classList.remove("dark");
    rootElement.classList.add("light");
  } else {
    rootElement.classList.remove("light");
    rootElement.classList.add("dark");
  }
});
