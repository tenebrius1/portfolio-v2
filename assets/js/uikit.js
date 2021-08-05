let toggle = document.querySelector(".theme-switch");
let cards = document.querySelectorAll('.project-cards');
let form = document.querySelector('.uk-form-stacked');

document.addEventListener('DOMContentLoaded', () => {
  let theme = document.body.getAttribute('theme');
  if (window.localStorage && localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' : (theme === 'auto' ? window.matchMedia('(prefers-color-scheme: dark)').matches : theme === 'dark')) {
    cards && document.querySelectorAll(".project-cards").forEach(card => card.classList.add('uk-card-secondary'));
    form && document.querySelector(".uk-form-stacked").classList.add('uk-light');
  } else {
    cards && document.querySelectorAll(".project-cards").forEach(card => card.classList.add('uk-card-default'));
    form && document.querySelector(".uk-form-stacked").classList.add('uk-dark');
  }
});

toggle.addEventListener('click', () => {
  cards && cards.forEach(card => card.classList.toggle("uk-card-secondary"));
  cards && cards.forEach(card => card.classList.toggle("uk-card-default"));
  form && form.classList.toggle("uk-light");
  form && form.classList.toggle("uk-dark");
})