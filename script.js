let display = new Date();
let hours = display.getHours();
let min = display.getMinutes();
let sec = display.getSeconds();
let blink = ":"
let amPm = hours >= 12 ? "PM" : "AM";

// If it's PM, convert the hours to 12-hour format
if (hours > 12) {
    hours -= 12;
}

// If it's midnight (0 hours), convert to 12 AM
if (hours === 0) {
    hours = 12;
}

setInterval(function () {
    sec++;
    if (sec == 60) {
        min++;
        sec = 0;
    }
    if (min == 60) {
        // hours = hours <10 ? "0" + hours:hours
        hours++;
        min = 0;
    }
    if (hours > 12) {
        hours -= 12;
        amPm = "PM";
    }
    if (hours === 0) {
        hours = 12;
        amPm = "AM";
    }
    // min = min <10 ? "0" + min:min

    document.getElementById("sec").innerHTML = sec.toString().padStart(2,0)
    document.getElementById("min").innerHTML = min.toString().padStart(2,0) + " " + blink;
    document.getElementById("hours").innerHTML = hours.toString().padStart(2,0) + " " + amPm + " " + blink;
    document.getElementById("amPm").innerHTML = amPm

}, 1000);
