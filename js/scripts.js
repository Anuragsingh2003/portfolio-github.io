// .................................
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=() => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
    
    
    let sections=document.querySelectorAll('section');
    let navLinks=document.querySelectorAll('header nav a');

window.onscroll=() =>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
    
        if(top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    
    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    // Get all links with class 'scroll-link'

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({

  // reset: true,
  distance: '80px',
  duration:2000,
  delay:200


});

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

  //   // Get all links with class 'scroll-link'


  // $(document).ready(function () {
  //   // Get all links with class 'scroll-link'
  //   const scrollLinks = $('.navbar a');

  //   // Iterate over each link and add a click event listener
  //   scrollLinks.on('click', function (e) {
  //     e.preventDefault();

  //     // Get the target section's ID from the link's href
  //     const targetId = $(this).attr('href').substring(1);

  //     // Scroll smoothly to the target section
  //     $('html, body').animate({
  //       scrollTop: $('#' + targetId).offset().top
  //     }, 1000);

  //     // Add or remove 'active' class from the clicked link and its siblings
  //     scrollLinks.removeClass('active');
  //     $(this).addClass('active');
  //   });
  // });


  //typed js..........................................................................................
  const typed= new Typed('.multiple-text',
  {
    strings: ['Software Engineer','Full Stack Developer','Data Analyst'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

  });
