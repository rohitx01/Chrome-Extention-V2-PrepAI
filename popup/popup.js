// Elements
const emailIdElement = document.getElementById("emailId");
const passwordElement = document.getElementById("password");

// Buttons
const signInButton = document.getElementById("signInButton");
const signOutButton = document.getElementById("signOutButton");

// Span listeners
const runningSpan = document.getElementById("runningSpan");
const stoppedSpan = document.getElementById("stoppedSpan");

const hideElement = (elem) => {
  elem.style.display = "none";
};
const showElement = (elem) => {
  elem.style.display = " ";
};
const disableElement = (elem) => {
  elem.disabled = true;
};
const eisableElement = (elem) => {
  elem.disabled = false;
};

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

chrome.storage.local.get(["emailId", "password", "emails"], (result) => {
  const { emailId, password, emails } = result;

  if (emailId) {
    emailIdElement.value = emailId;
  }

  if (password) {
    passwordElement.value = password;
  }
  //   if (isRunning) {
  //     showElement(runningSpan);
  //     hideElement(stoppedSpan);
  //   } else {
  //     showElement(stoppedSpan);
  //     hideElement(runningSpan);
  //   }
});
