//hostname remains same for content_script lifetime
const hostname = location.hostname;

let start = Date.now();
let stop = null;
let timeSpent = null;

const saveAfter = 3 * 1000;

//save data every 3 second incase crash or anything unexpected happens
setInterval(function () {
  if (document.visibilityState === "visible") {
    updateTimeSpent();
    start = Date.now();
  }
}, saveAfter);

document.addEventListener("visibilitychange", handleVisibilityChange, false);

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

function updateTimeSpent() {
  stop = Date.now();
  // Date.now() returns time in milliseconds since unix epoch,
  // divide by 1000 to get time in seconds
  timeSpent = (stop - start) / 1000;
  handleMessage(Math.floor(timeSpent));
}

function handleMessage(time) {
  let info = {
    task: "updateUsageData",
    hostname: hostname,
    timeSpent: time,
  };
  chrome.runtime.sendMessage(info);
}
