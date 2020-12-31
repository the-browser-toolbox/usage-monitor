// get list from storage
let getUsageStats = async () => {
    let p = new Promise((resolve, reject) => {
        chrome.storage.sync.get(['usageData'], (result) => {
            resolve(result)
        })
    })
    const stats = await p
    return stats
}

export default getUsageStats
