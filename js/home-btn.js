const btn = document.querySelector('.home__home-btn');
const homebg = document.querySelector('.home-bg');
const blocks = document.querySelectorAll('.header, .main, .skills');

btn.addEventListener('click', () => {
   
   document.documentElement.style.overflow = 'auto';
   document.body.style.overflow = 'auto';
   document.body.style.height = 'auto';
   document.body.style.width = 'auto';

   
   homebg.classList.add('slide');
   blocks.forEach(block => block.classList.add('unslide'));

   
   homebg.addEventListener('transitionend', () => {
      homebg.style.display = 'none';
   }, );
});