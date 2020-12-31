// listen for message from content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.task === 'updateUsageData') handleUpdateUsageData(request.hostname, request.timeSpent)
})

/*
extension will be storing data in chrome storage 
using key "usageData";
"usageData" is object with hostname as key and timespent 
in seconds as value;
usageData = {
  "hostname1" : "timeSpent",
  "hostname2" : "timeSpent"
}
*/

function handleUpdateUsageData(hostname, timeSpent) {
    chrome.storage.sync.get(['usageData'], function (result) {
        let usageData = result.usageData
        // if usageData or usageData[hostname] doesn't exist
        if (usageData === undefined) usageData = {}
        if (usageData[hostname] === undefined) usageData[hostname] = 0

        usageData[hostname] += timeSpent

        chrome.storage.sync.set({ usageData: usageData }, function () {
            console.log('updated data is: ', usageData)
        })
    })
}
