let clock = new Date();
let hours = clock.getHours(); // getting hours
let amPm = hours >= 12 ? "PM" : "AM"; // getting am/pm
let min = clock.getMinutes(); // getting min
let sec = clock.getSeconds(); // getting sec
let blink = ":";

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]; //array for getting month

let monthIndex = clock.getMonth(); // getting month index
let todayDate = clock.getDate().toString().padStart(2, 0); //getting date
let year = clock.getFullYear().toString().padStart(2, 0); //getting year

// making clock logic using setInterval & if else condition
if (hours >= 12) {
  amPm = "PM";
} else {
  amPm = "AM";
}
if (hours === 0) {
  hours = 12;
} else if (hours > 12) {
  hours = hours - 12;
}

setInterval(function () {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  }
  if (min == 60) {
    hours++;
    min = 0;
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, 0);
  document.getElementById("min").innerHTML = blink + " " + min.toString().padStart(2, 0) + " " + blink;
  document.getElementById("amPm").innerHTML = amPm;
  document.getElementById("sec").innerHTML = sec.toString().padStart(2, 0);
  document.getElementById("todayDate").innerHTML = todayDate;
  document.getElementById("year").innerHTML = year;

  // Display months
  let monthsHTML = "";
  for (let i = 0; i < months.length; i++) {
    if (i === monthIndex) {
      monthsHTML += `<span class="current-month">${months[i]}</span>`;
    } else {
      monthsHTML += `<span>${months[i]}</span>`;
    }
    // Add space after each month except the last one
    if (i < months.length - 1) {
      monthsHTML += " ";
    }
  }
  document.getElementById("month").innerHTML = monthsHTML;
}, 1000);
