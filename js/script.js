window.addEventListener('scroll', () => {
    // Verifica a posição do scroll
    if (window.scrollY > 50) { 
      document.body.classList.add('scroll-active');
      document.querySelector('.page-container').classList.add('scroll-active');
      document.querySelector('h1').classList.add('scroll-active');
      document.querySelector('p').classList.add('scroll-active');
    } else {
      document.body.classList.remove('scroll-active');
      document.querySelector('.page-container').classList.remove('scroll-active');
      document.querySelector('h1').classList.remove('scroll-active');
      document.querySelector('p').classList.remove('scroll-active');
    }

});  

window.addEventListener('load', () => {
    document.querySelector('.animated-element').classList.add('show');
});