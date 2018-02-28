///////////////////////////////////////////////////////////////////////
// FORM VALIDATIONS
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);
document.getElementById("message").addEventListener("blur", validateMessage);

const msg = document.querySelector(".message");
const msg2 = document.querySelector(".message2");
const msg3 = document.querySelector(".message3");
const msg4 = document.querySelector(".message4");

function validateName() {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z ]+$/;

  if (!re.test(name.value) || name.value.length == 0) {
    msg.innerHTML = "name must be filled only in letters";
  } else {
    msg.innerHTML = "";
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value) || email.value.length == 0) {
    msg2.innerHTML = "valid email must be filled";
  } else {
    msg2.innerHTML = "";
  }
}

function validatePhone() {
  const phone = document.getElementById("phone");
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value) || phone.value.length == 0) {
    msg3.innerHTML = "valid phone numbers must be filled";
  } else {
    msg3.innerHTML = "";
  }
}

function validateMessage() {
  const message = document.getElementById("message");

  if (message.value == "") {
    msg4.innerHTML = "message cannot be blank";
  } else {
    msg4.innerHTML = "";
  }
}

// FORM SUBMISSION

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCssvOW5SUs-S71n2iRFXPo_52USTWTGEo",
  authDomain: "vepop-f0e86.firebaseapp.com",
  databaseURL: "https://vepop-f0e86.firebaseio.com",
  projectId: "vepop-f0e86",
  storageBucket: "vepop-f0e86.appspot.com",
  messagingSenderId: "599284911951"
};
firebase.initializeApp(config);

// Reference messages collection(tables)
// database() <- initializes database
// .ref('databaseName') <- If I want to name database by specific name/title
var messagesRef = firebase.database().ref("messages");

// Submit form
document.getElementById("contact-form").addEventListener("submit", e => {
  // go through validations
  e.preventDefault();
  validateName();
  validateEmail();
  validatePhone();
  validateMessage();

  // If everything passes
  if (
    msg.innerHTML === "" &&
    msg2.innerHTML === "" &&
    msg3.innerHTML === "" &&
    msg4.innerHTML === ""
  ) {
    let name = getInputVal("name");
    let email = getInputVal("email");
    let phone = getInputVal("phone");
    let message = getInputVal("message");

    // Save message
    saveMessage(name, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(() => {
      document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Resetting contact form - clear form
    document.getElementById('contact-form').reset();
  }
});

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}