import getUsageStats from "./utils/getUsageStats.js";
import { createList, createListItem } from "./utils/updateDom.js";

function updateMostVisitedSites(stats) {
  let timeSpentValues = Object.values(stats);
  const topTimeSpentValues = timeSpentValues.sort().slice(0, 5);
  let topStats = {};

  for (let i in topTimeSpentValues) {
    for (let key in stats) {
      if (stats[key] === topTimeSpentValues[i]) {
        topStats[key] = topTimeSpentValues[i];
        break;
      }
    }
  }
  createList(topStats);
}

function updateCurrentSite(stats) {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      let url = tabs[0].url;
      let hostname = url
        .replace("http://", "")
        .replace("https://", "")
        .split(/[/?#]/)[0];
      let currentSite = createListItem(hostname, stats[hostname]);
      let currentSiteSpan = document.querySelector("#currentSite");
      currentSiteSpan.innerHTML = "";
      currentSiteSpan.appendChild(currentSite);
    }
  );
}
async function updatePage() {
  let a = await getUsageStats();
  const stats = a.usageData;
  updateMostVisitedSites(stats);
  updateCurrentSite(stats);
}
updatePage();
// update page every 10 seconds
setInterval(updatePage, 10000);
