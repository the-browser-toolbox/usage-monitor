//hostname remains constant for content_script lifetime
const hostname = location.hostname;

let start = Date.now();
let stop = undefined;
let timeSpent = undefined;

document.addEventListener("visibilitychange", handleVisibilityChange, false);

function handleMessage(time) {
  let info = {
    task: "update",
    host: hostname,
    timeSpent: time,
  };
  chrome.runtime.sendMessage(info);
}

function updateTimeSpent() {
  stop = Date.now();
  // Date.now() returns time in milliseconds since unix epoch,
  // divide by 1000 to get time in seconds
  timeSpent = (stop - start) / 1000;
  handleMessage(Math.floor(timeSpent));
}

function handleVisibilityChange() {
  let isVisible = document.visibilityState === "visible";
  let isHidden = document.visibilityState === "hidden";
  let isUnloaded = document.visibilityState === "unloaded";

  if (isHidden || isUnloaded) {
    updateTimeSpent();
  } else if (isVisible) {
    start = Date.now();
  }
}
