// Get the email and password inputs from the popup.html file
const emailInput = document.getElementById("emailId");
const passwordInput = document.getElementById("password");

// Add event listener to the sign-in button
const signInButton = document.getElementById("signInButton");
signInButton.addEventListener("click", saveCredentials);

// Function to save the email and password in Chrome extension storage
function saveCredentials() {
  const email = emailInput.value;
  const password = passwordInput.value;

  // Save the email and password using chrome.storage
  chrome.storage.local.set({ email, password }, function () {
    console.log("Credentials saved successfully.");
  });
}
