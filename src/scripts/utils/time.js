/*
convert seconds to proper displayable format
for ex :
124s as 2m 4s
3664s as 1h 1m 4s
*/

function getTimeString(timeSpent) {
    if (timeSpent < 60) {
        return `${timeSpent}s`
    } else if (timeSpent < 3600) {
        const minutes = Math.floor(timeSpent / 60)
        const seconds = Math.floor(timeSpent % 60)
        return `${minutes}m ${seconds}s`
    } else {
        const hours = Math.floor(timeSpent / 3600)
        const minutes = Math.floor((timeSpent % 3600) / 60)
        const seconds = Math.floor(timeSpent % 60)
        return `${hours}h ${minutes}m ${seconds}s`
    }
}

export default getTimeString
