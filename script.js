

 const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 1.5,
  loop:true,
  autoHeight: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
 });




 document.addEventListener('DOMContentLoaded', function() {
  const openButton = document.querySelector('.button-open'); 
  const closeButton = document.querySelector('.button-close'); 
  const hiddenSlides = document.querySelectorAll('.dop-slide'); 
  const breakpoint = window.matchMedia('(max-width: 767px)');

  
  function toggleSlides() {
    if (breakpoint.matches) {
      
      hiddenSlides.forEach(slide => {
        slide.style.display = 'flex'; 
      });
      
      openButton.closest('.open-close').style.display = 'none';
      closeButton.closest('.open-close').style.display = 'none';
    } else {
      
      hiddenSlides.forEach(slide => {
        slide.style.display = 'none';
      });
      
      openButton.closest('.open-close').style.display = 'flex';
      closeButton.closest('.open-close').style.display = 'none';
    }
  }
 
  toggleSlides();

  breakpoint.addListener(toggleSlides);

  
  openButton.addEventListener('click', function() {
    hiddenSlides.forEach(slide => {
      slide.style.display = 'flex';
    });
    openButton.closest('.open-close').style.display = 'none';
    closeButton.closest('.open-close').style.display = 'flex';
  });

 
  closeButton.addEventListener('click', function() {
    hiddenSlides.forEach(slide => {
      slide.style.display = 'none';
    });
    closeButton.closest('.open-close').style.display = 'none';
    openButton.closest('.open-close').style.display = 'flex';
  });
});





