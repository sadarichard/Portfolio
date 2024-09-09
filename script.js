/* BURGER MENU */
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.getElementById('burgerIcon');
    const navMenu = document.getElementById('navMenu');

    burgerIcon.addEventListener('click', () => {
        // Toggle the 'active' class on the burger icon
        burgerIcon.classList.toggle('active');
        // Toggle the display of the nav menu
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });
});

// FORM VALIDATION
document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    let isValid = true;

    // Get form elements
    const name = document.getElementById('myName');
    const email = document.getElementById('myEmail');
    const myMail = document.getElementById('myMail');
    const message = document.getElementById('myMessage');

    // Validate name
    if (name.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }

    // Validate mail
    const myMailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!myMailPattern.test(myMail.value.trim())) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }

    // Validate message
    if (message.value.trim() === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    }

    // If valid, submit form or perform actions
    if (isValid) {
        // Form is valid, you can submit it or perform other actions
        alert('Form submitted successfully!');
        // Uncomment the next line to actually submit the form
        // this.submit();
    }
});

// Section Scroll
  document.addEventListener('DOMContentLoaded', function() {
    // Get all anchor links in the navigation bar
    const links = document.querySelectorAll('#navbar a');

    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the target section's ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  });

