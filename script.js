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

console.log('Ваша оценка - 140 баллов\nОтзыв по пунктам ТЗ:\nНе выполненные / не засчитанные пункты:\n1) CV содержит изображения - ссылки на выполненные вами проекты.При клике по изображению страница проекта открывается в новой вкладке.У каждого проекта есть название, небольшое описание, указан перечень используемых технологий - Сделаю до конца проверки.\n2) есть видеорезюме автора CV на английском языке.Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки.Продолжительность видео 3 - 5 минут(±15 секунд).В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке(например, в документе Google Docs).\n PR - https://github.com/maximiloi/rsschool-cv/pull/4');