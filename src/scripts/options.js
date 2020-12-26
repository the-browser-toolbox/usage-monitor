import getUsageStats from "./utils/getUsageStats.js";
import { createList } from "./utils/updateDom.js";

async function generateList() {
  let a = await getUsageStats();
  createList(a.usageData);
}
generateList();
// update page every 10 seconds
setInterval(generateList, 10000);

// reset button

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => {
  chrome.storage.sync.set({ usageData: {} }, function () {
    alert("data reset successful!");
  });
});
