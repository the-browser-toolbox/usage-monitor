// listen for message from content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.task === "update") {
    console.log(
      "hostname and time is" + request.host + " " + request.timeSpent
    );
  }
});
