const mburger = document.getElementById('mburger');
const menu = document.getElementById('menu-principal');

mburger.addEventListener('click', function() {
  this.classList.toggle('active');
  menu.classList.toggle('open');
  const abierto = menu.classList.contains('open');
  this.setAttribute('aria-expanded', abierto);
});