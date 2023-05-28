window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  
  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    let valid = true;
    if (name === "") {
      valid = false;
      alert("Please enter your name.");
    }
    if (subject.length < 10) {
      valid = false;
      alert("Subject must be at least 10 characters long.");
    }
    if (message.length < 25) {
      valid = false;
      alert("Message must be at least 25 characters long.");
    }
    if (!validateEmail(email)) {
      valid = false;
      alert("Please enter a valid email address.");
    }
  
    return valid;
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
  const form = document.querySelector("form");
  const message = document.createElement("p");
  message.classList.add("success-message");
  const contactBox = document.querySelector(".contact-box");
  const contactContainer = document.querySelector(".contact-container");
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    if (validateForm()) {
      message.textContent =
        "Thank You For Your Submission! We Will Reply To You Within 14 Days";
      form.reset();
      contactContainer.insertBefore(message, contactBox.nextSibling);
    }
  });