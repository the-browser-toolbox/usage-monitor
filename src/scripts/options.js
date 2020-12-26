import getUsageStats from './utils/getUsageStats.js'
import { createList } from './utils/updateDom.js'

async function generateList() {
    let a = await getUsageStats()
    createList(a.usageData)
}
generateList()
// update page every 1 seconds
setInterval(generateList, 1000)

// reset button

const resetBtn = document.querySelector('#resetBtn')
resetBtn.addEventListener('click', () => {
    chrome.storage.sync.set({ usageData: {} }, function () {
        alert('data reset successful! updating page in few seconds automatically')
        generateList()
    })
})
