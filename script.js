document.addEventListener("DOMContentLoaded", function () {

  document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.menu_container').classList.toggle('active');
  });

  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("mouseover", () => {
      cards.forEach(c => {
        if (c !== card) {
          c.classList.add("shrink");
        }
      });
    });

    card.addEventListener("mouseout", () => {
      cards.forEach(c => {
        c.classList.remove("shrink");
      });
    });
  });

  const scrollImages = document.querySelector(".scroll-images");
  const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
  const leftButton = document.querySelector(".left");
  const rightButton = document.querySelector(".right");

  function checkScroll() {
    const currentScroll = scrollImages.scrollLeft;
    if (currentScroll === 0) {
      leftButton.setAttribute("disabled", "true");
      rightButton.removeAttribute("disabled");
    } else if (currentScroll === scrollLength) {
      rightButton.setAttribute("disabled", "true");
      leftButton.removeAttribute("disabled");
    } else {
      leftButton.removeAttribute("disabled");
      rightButton.removeAttribute("disabled");
    }
  }

  scrollImages.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();

  function leftScroll() {
    scrollImages.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  }

  function rightScroll() {
    scrollImages.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  }

  leftButton.addEventListener("click", leftScroll);
  rightButton.addEventListener("click", rightScroll);
});

function sendEmail() {
  emailjs.init("lkXj7nvH4znZu71WF");

  var templateParams = {
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
  };

  emailjs.send('service_y9bkh8f', 'template_wl5j16j', templateParams)
      .then(function(response) {
          alert('Your message has been sent successfully!');
          clearFormFields();
      }, function(error) {
          alert('Oops... ' + JSON.stringify(error));
      });

  return false;
}

function clearFormFields() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('message').value = '';
}

function validationForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.trim() === '') {
      alert('Please enter your name');
      return false;
  }

  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return false;
  }

  if (message.trim() === '') {
      alert('Please enter a message');
      return false;
  }

  return true;
}