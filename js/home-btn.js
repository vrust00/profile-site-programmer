const btn = document.querySelector('.home__home-btn');
const homebg = document.querySelectorAll('.home-bg, .home');
const blocks = document.querySelectorAll('.header, .header__contact-btn, .main, .skills');

btn.addEventListener('click', () => {
   
   document.documentElement.style.overflow = 'auto';
   document.body.style.overflow = 'auto';
   document.body.style.height = 'auto';
   document.body.style.width = 'auto';

   homebg.forEach(el => el.classList.add('slide'));
   
   blocks.forEach(el => el.classList.add('unslide'));

   
   homebg.forEach(el => {
      el.addEventListener('transitionend', () => {
         el.style.display = 'none';
      }, { once: true });
   });
});