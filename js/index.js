// Your code goes here

  // PREVENT DEFAULT  -  Not sure if this is correct  ????

  const links = document.querySelectorAll('nav a');
  document.addEventListener('click', e => {
      e.preventDefault();
  })


// Mouseover Event //

const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', e => {
    logo.textContent = 'Super Duper Fun Bus!';
});

const h2 = document.querySelector('.intro h2');
h2.addEventListener('mouseover', e => {
    h2.textContent = 'Get in the Freakin Bus!';
});

const h3 = document.querySelector('.content-section .text-content h2');
h3.addEventListener('mouseover', e => {
    h3.textContent = 'Hurry Up Slow Poke!';
});

const h4 = document.querySelector('.content-destination h2');
h4.addEventListener('mouseover', e => {
    h4.textContent = 'Where do you want to go?';
});

// Click //

const footer = document.querySelector('.footer p');
footer.addEventListener('click', function(){
  footer.style.fontSize = '2.2rem';
});

// Double Click //

const signUpBtn = document.querySelector('.btn');
signUpBtn.addEventListener('dblclick', () => {
	signUpBtn.textContent = 'Stop Clicking!';
});

// Keydown //

const crazycolors = document.querySelector('body');
document.addEventListener('keydown', () => {
	crazycolors.style.background = 'red';
});

const crazycolors2 = document.querySelector('p');
document.addEventListener('keydown', () => {
	crazycolors2.style.color = 'white';
});

// Scroll //

const scroll = document.querySelector('.content-section .text-content');
document.addEventListener('scroll', () => {
	scroll.style.color = 'green';
});

const scroll2 = document.querySelector('.content-destination p');
document.addEventListener('scroll', () => {
	scroll2.style.color = 'purple';
});