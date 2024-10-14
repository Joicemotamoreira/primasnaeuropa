function toggleMenu() {
  let newMenu = document.querySelector(".newMenu");
  newMenu.classList.toggle("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function closeNewMenu() {
  let newMenu = document.querySelector(".newMenu");
  newMenu.classList.remove("active");
}
