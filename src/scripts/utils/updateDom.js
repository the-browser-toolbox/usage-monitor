import display from "./time.js";
let createListItem = (hostname, timeSpent) => {
  if (!hostname) return;
  let listItem = document.createElement("li");
  listItem.classList.add("siteStats");

  let hostnameSpan = document.createElement("span");
  hostnameSpan.textContent = hostname;
  hostnameSpan.classList.add("hostname");

  let timeSpentSpan = document.createElement("span");
  timeSpentSpan.textContent = timeSpent;
  timeSpentSpan.classList.add("timeSpent");

  listItem.append(hostnameSpan, timeSpentSpan);
  return listItem;
};
let createList = (usageStats) => {
  let list = document.querySelector("ul");
  const hosts = Object.keys(usageStats);
  hosts.forEach((host) => {
    const timeSpent = display(usageStats[host]);
    const hostEntry = createListItem(host, timeSpent);
    list.appendChild(hostEntry);
  });
};

export { createListItem, createList };
