const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    // You can add code here to handle the submitted email (e.g., send it to a server or display it).
    alert("Thank you for submitting your email: " + email);
    
    // Clear the input field
    document.getElementById("email").value = "";
});
