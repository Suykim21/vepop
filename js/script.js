// NAVBAR TOGGLE
const navToggle = document.querySelector(".navigation__button");
const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
const navButton = document.querySelector(".user-nav__user");
const navBar = document.querySelector(".user-nav");

// SORT BUTTON
const sortParent = document.querySelector(".sort");
const sortButtons = document.querySelectorAll(".sort li");

// EVENTS
const eventPage = document.getElementById('events');

navToggle.addEventListener("click", _ => {
  container.classList.toggle("add_margins");
});

navToggle.addEventListener("click", _ => {
  wrapper.classList.toggle("add_margins");
});

navButton.addEventListener("click", _ => {
  document.getElementById("navi-toggle").checked = false;
  container.classList.remove("add_margins");
});

navButton.addEventListener("click", _ => {
  document.getElementById("navi-toggle").checked = false;
  wrapper.classList.remove("add_margins");
});

// NAVBAR
navBar.onclick = e => {
  let target = e.target; // where was the click?
  console.log(target.className);
  // if its not the className we are looking, just return;
  if (target.className != "user-nav__icon-box") {
    // console.log('im here');
    return;
  } else {
    // console.log('im here at else');

    document.getElementById("navi-toggle").checked = false;
    container.classList.remove("add_margins");
  }
};

// FILTERING THE LIST

// Get input element
let filterInput = document.getElementById("filterInput");
// Add event listener
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  // Get value of input
  let filterValue = document.getElementById("filterInput").value.toUpperCase();

  // Get events ul
  let ul = document.getElementById("events");

  // Get lis from ul
  let li = ul.querySelectorAll("li.event-box");

  // Loop through event-box lis
  for (let i = 0; i < li.length; i++) {
    // [0] => get current title
    let span = li[i].getElementsByTagName("span")[0];

    // If matched - innerHTML checks inside the element
    // Greater than -1 means one of the letters matches
    if (span.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// SORT
sortParent.onclick = e => {
  let target = e.target;

  if (target.id == "sort__picked") {
    // console.log(target.classList.contains('value'));
    return;
  } else {
    sortButtons.forEach(btn => btn.removeAttribute("id"));
    target.setAttribute("id", "sort__picked");
  }
};

// SCREEN SIZE CHANGES
window.addEventListener("resize", removeClass);

function removeClass() {
  // console.log(window.innerWidth);
  if (window.innerWidth > 600) {
    // wrapper.classList.remove("add_margins");
    container.classList.remove("add_margins");
    document.getElementById("navi-toggle").checked = false;
  }
}

// TEST
function loadEvents(e){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'events.json', true);

  xhr.onload = function() {
    console.log(this);
    if (this.status === 200) {
      
      const events = JSON.parse(this.responseText);

      let output = '';

      events.forEach((event) => {
        // +=, to append all events
        output += `
        <li class="event-box">
          <div class="event-box__side event-box__side--front">
            <div class="event-box__picture">
              <img src="${event.url}" alt="art eleven" class="event-box__picture--one">
            </div>
            <h4 class="event-box__heading">
              <span class="event-box__heading-span event-box__heading-span--1">${event.title}</span>
            </h4>
            <div class="event-box__details">
              <p class="paragraph event-box__date">${event.date}</p>
              <p class="location">${event.location}</p>
              <p class="paragraph paragraph--small">${event.description}</p>
              <a href="#" class="button event-box__link">&#10596;</a>
            </div>
          </div>
          <div class="event-box__side event-box__side--back event-box__side--back-1">
            <div class="event-box__cta">
              <div class="event-box__price-box">
                <p class="event-box__price-only">Only</p>
                <p class="event-box__price-value">${event.price}</p>
              </div>
              <a href="#" class="btn btn--white">details</a>
            </div>
          </div>
        </li>
        `
      })
      
      eventPage.innerHTML = output;

    } else {
      console.log("failed");
    }
  };
  xhr.send();
}

window.onload = loadEvents;
