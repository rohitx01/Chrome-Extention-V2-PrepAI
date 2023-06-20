// Elements
const emailIdElement = document.getElementById("emailId");
const passwordElement = document.getElementById("password");

// Buttons
const signInButton = document.getElementById("signInButton");
const signOutButton = document.getElementById("signOutButton");

signInButton.onclick = () => {
  const prefs = {
    emailId: emailIdElement.value,
    password: passwordElement.value,
  };
  chrome.runtime.sendMessage({ event: "onStart", prefs });
};

signOutButton.onclick = () => {
  chrome.runtime.sendMessage({ event: "onStop" });
};

chrome.storage.local.get(["emailId", "password"], (result) => {
  const { emailId, password } = result;

  if (emailId) {
    emailIdElement.value = emailId;
  }

  if (password) {
    passwordElement.value = password;
  }
});
