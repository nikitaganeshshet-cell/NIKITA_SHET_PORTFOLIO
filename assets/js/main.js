
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let controls = document.querySelectorAll('.ctrl');
let current = 0;
function go(i){
  current = (i + slides.length) % slides.length;
  slider.style.transform = `translateX(-${current*100}%)`;
  controls.forEach((c,idx)=> c.classList.toggle('active', idx===current));
}
controls.forEach((el,idx)=> el.addEventListener('click', ()=> go(idx)));
let autoplay = setInterval(()=> go(current+1), 4500);
// pause on hover
const hero = document.querySelector('.hero-wrap');
hero.addEventListener('mouseenter', ()=> clearInterval(autoplay));
hero.addEventListener('mouseleave', ()=> autoplay = setInterval(()=> go(current+1), 4500));
// smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=> a.addEventListener('click', e=>{ e.preventDefault(); document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'}); }));
