// import fetchemail from "./api/fetchEmails.js";

// chrome.runtime.onInstalled.addListener((details) => {
//   //   console.log("onInstalled reason:", details.reason);
//   fetchemail();
// });

// chrome.runtime.onMessage.addListener((data) => {
//   const { event, prefs } = data;
//   switch (event) {
//     case "onStop":
//       handleOnStop();
//       break;
//     case "onStart":
//       handleOnStart(prefs);
//       break;
//     default:
//       break;
//   }
// });

// const handleOnStop = () => {
//   console.log("On Stop in background");
// };

// const handleOnStart = (prefs) => {
//   console.log("On Start in background");
//   console.log("prefs recieved", prefs);
//   chrome.storage.local.set(prefs);
// };

import fetchEmail from "./api/fetchEmails.js";

chrome.runtime.onInstalled.addListener((details) => {
  fetchEmail();
});

chrome.runtime.onMessage.addListener((data) => {
  const { event, prefs } = data;
  switch (event) {
    case "onStop":
      handleOnStop();
      break;
    case "onStart":
      handleOnStart(prefs);
      break;
    default:
      break;
  }
});

const handleOnStop = () => {
  console.log("On Stop in background");
};

const handleOnStart = (prefs) => {
  console.log("On Start in background");
  console.log("prefs received", prefs);
  chrome.storage.local.set(prefs);
};
