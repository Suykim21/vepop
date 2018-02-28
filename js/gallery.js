const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Destructuring
// const [current, imgs] = [
//   document.querySelector('#current'),
//   document.querySelectorAll('.imgs img')
// ];

// returns nodelist
console.log(imgs);

// Loop through nodelist, when clicked, put that specific src to current.src
// imgs.forEach(img => img.addEventListener('click', (e) => current.src = e.target.src));

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // Reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));
  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.add('fade-in');

  // Remove fade-in class after 1 second
  setTimeout(() =>  current.classList.remove('fade-in'), 1000);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}