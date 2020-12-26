import getUsageStats from "./utils/getUsageStats.js";
import { createList } from "./utils/updateDom.js";

async function generateList() {
  let a = await getUsageStats();
  createList(a.usageData);
}
generateList();
