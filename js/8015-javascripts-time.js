
// Will return formatted time
function getCurrentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh === 0) {
        hh = 12;
    } else if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    return hh + ":" + mm + ":" + ss + " " + session;
}

// Will update the time at the clock element
function updateTime() {
    document.getElementById("clock").innerText = getCurrentTime();
}




function startTimeUpdate() {
    // Initial time update
    updateTime();
    // Will update the time each 100ms
    setInterval(() => updateTime(), 100);
}