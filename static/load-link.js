
const loadNavLink = document.getElementsByClassName('loadNavLink');
const navLinks = document.getElementsByClassName('navLinks');

console.log("JS LOADED")
navLinks.addEventListener('click', function handleClick() {
  console.log("nav clicked")
  navLink.classList.remove("loadNavLink");
});