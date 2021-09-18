// scroll to #
const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smoothScrollElems.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const id = link.getAttribute('href').substring(1);

    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// scroll to top
const mybutton = document.querySelector('.scroll-to-top');
const topScroll = document.querySelector('.cv');

window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  topScroll.scrollIntoView({
    behavior: 'smooth',
  });
}

// burger
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
});
