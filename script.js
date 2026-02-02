document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // Clear errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  }

  if (!email.includes("@")) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
  }
});
