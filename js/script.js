// NAVBAR TOGGLE
const navToggle = document.querySelector('.navigation__button');
const container = document.querySelector('.container');
const navButton = document.querySelector('.user-nav__user');
const navBar = document.querySelector('.user-nav');


navToggle.addEventListener('click', _ => {
  container.classList.toggle('add_margins');
});

navButton.addEventListener('click', _ => {
  document.getElementById('navi-toggle').checked = false;
  container.classList.remove('add_margins');
});

navBar.onclick = (e) => {
  let target = e.target; // where was the click?
  console.log(target.className);
  // if its not the className we are looking, just return;
  if (target.className != "user-nav__icon-box") {
    console.log('im here');
    return;
  } else {
    console.log('im here at else');

    document.getElementById('navi-toggle').checked = false;
    container.classList.remove('add_margins');
  } 
}

// SCREEN SIZE CHANGES
window.addEventListener("resize", removeClass);

function removeClass() {
  // console.log(window.innerWidth);
  if (window.innerWidth > 600) {
    container.classList.remove('add_margins');
    document.getElementById('navi-toggle').checked = false;
  }
}