// Script to handle login and sign up modal interactions
window.onload = function() {
    var loginModal = document.getElementById("loginModal");
    var signupModal = document.getElementById("signupModal");
    var welcomeModal = document.getElementById("welcomeModal");

    var closeButtons = document.querySelectorAll(".close-btn");

    // Show the login modal by default
    loginModal.style.display = "block";

    // Close the modals when the 'X' button is clicked
    closeButtons.forEach(function(btn) {
        btn.onclick = function() {
            loginModal.style.display = "none";
            signupModal.style.display = "none";
        };
    });

    // Switch to Sign Up modal
    document.getElementById("showSignup").onclick = function(e) {
        e.preventDefault();
        loginModal.style.display = "none";
        signupModal.style.display = "block";
    };

    // Login form submission
    document.getElementById("loginForm").onsubmit = function(e) {
        e.preventDefault();
        var username = document.getElementById("username").value;
        loginModal.style.display = "none";
        showWelcomeMessage(username);
    };

    // Sign Up form submission
    document.getElementById("signupForm").onsubmit = function(e) {
        e.preventDefault();
        var newUsername = document.getElementById("newUsername").value;
        signupModal.style.display = "none";
        showWelcomeMessage(newUsername);
    };

    // Show welcome message
    function showWelcomeMessage(username) {
        var welcomeMessage = document.getElementById("welcomeMessage");
        welcomeMessage.textContent = username + " welcome to Property 101!";
        welcomeModal.style.display = "block";

        // Hide the welcome message after 3 seconds
        setTimeout(function() {
            welcomeModal.style.display = "none";
        }, 3000);
    }

    // Close the modals when user clicks outside of the modal content
    window.onclick = function(event) {
        if (event.target == loginModal || event.target == signupModal) {
            loginModal.style.display = "none";
            signupModal.style.display = "none";
        }
    };
};

//JavaScript to toggle the menu on mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

//JavaScript to toggle the menu on mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

