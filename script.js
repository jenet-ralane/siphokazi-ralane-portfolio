const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('siteNav');
if(hamburger){
  hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}