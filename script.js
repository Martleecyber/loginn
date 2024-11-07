// function handleLogin(event) {
//     event.preventDefault(); // Prevent page refresh on form submit
//     const email = document.querySelector("input[type='email']").value;
//     const password = document.querySelector("input[type='password']").value;

//     // Placeholder authentication - replace with actual authentication
//     if (email === "test@example.com" && password === "password") {
//         alert("Login successful!");
//     } else {
//         alert("Invalid email or password.");
//     }
// }
// function switchToSignUp() {
//     document.getElementById('container').classList.add('active');
// }

// function switchToSignIn() {
//     document.getElementById('container').classList.remove('active');
// }

// function handleLogin(event) {
//     event.preventDefault();
//     const email = document.querySelector("#loginForm input[type='email']").value;
//     const password = document.querySelector("#loginForm input[type='password']").value;

//     if (email === "test@example.com" && password === "password") {
//         alert("Login successful!");
//     } else {
//         alert("Invalid email or password.");
//     }
// }

// function handleSignUp(event) {
//     event.preventDefault();
//     alert("Account created successfully!");
// }
// function togglePasswordVisibility(passwordFieldId) {
//     const passwordField = document.getElementById(passwordFieldId);
//     passwordField.type = passwordField.type === "password" ? "text" : "password";
// }
// function toggleForm() {
//     const container = document.getElementById('container');
//     container.classList.toggle('active');
// }


// // Toggle visibility of sign-in and sign-up forms
// function toggleForm() {
//     const signInContainer = document.getElementById("signInContainer");
//     const signUpContainer = document.getElementById("signUpContainer");

//     // Toggle display for each form
//     if (signInContainer.style.display === "none") {
//         signInContainer.style.display = "block";
//         signUpContainer.style.display = "none";
//     } else {
//         signInContainer.style.display = "none";
//         signUpContainer.style.display = "block";
//     }
// }

// // Toggle password visibility
// function togglePasswordVisibility(inputId) {
//     const passwordField = document.getElementById(inputId);
//     passwordField.type = passwordField.type === "password" ? "text" : "password";
// }

// // Handle sign-in form submission
// function handleSignIn(event) {
//     event.preventDefault(); // Prevent actual form submission
//     const email = document.getElementById("loginEmail").value.trim();
//     const password = document.getElementById("loginPassword").value.trim();

//     // Simulate authentication (this would be handled server-side in a real application)
//     if (email === "test@example.com" && password === "password") {
//         alert("Login successful!");
//         // Redirect to the main page or dashboard
//         window.location.href = "index.html";
//     } else {
//         alert("Invalid email or password.");
//     }
// }

// // Handle sign-up form submission
// function handleSignUp(event) {
//     event.preventDefault(); // Prevent actual form submission
//     const name = document.getElementById("signUpName").value.trim();
//     const email = document.getElementById("signUpEmail").value.trim();
//     const password = document.getElementById("signUpPassword").value.trim();

//     if (name && email && password) {
//         // Simulate account creation (this would be handled server-side in a real application)
//         alert(`Account created for ${name} with email ${email}!`);
//         toggleForm(); // Switch to sign-in form after signup
//     } else {
//         alert("Please fill in all fields.");
//     }
// }


// const container = document.getElementById("container");
// const signInButton = document.getElementById("signIn");
// const signUpButton = document.getElementById("signUp");

// signInButton.addEventListener("click", () => {
//     container.classList.remove("right-panel-active");
// });

// signUpButton.addEventListener("click", () => {
//     container.classList.add("right-panel-active");
// });

// // Toggle password visibility
// function togglePasswordVisibility(inputId) {
//     const passwordField = document.getElementById(inputId);
//     passwordField.type = passwordField.type === "password" ? "text" : "password";
// }
function toggleForm() {
    const container = document.getElementById("container");
    container.classList.toggle("active");
}

function togglePasswordVisibility(inputId) {
    const passwordField = document.getElementById(inputId);
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

function handleSignIn(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email === "test@example.com" && password === "password") {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password.");
    }
}

function handleSignUp(event) {
    event.preventDefault();
    const name = document.getElementById("signUpName").value;
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;

    alert(`Account created for ${name} with email ${email}!`);
    toggleForm();
}
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const isPassword = passwordInput.getAttribute("type") === "password";
    passwordInput.setAttribute("type", isPassword ? "text" : "password");
}
