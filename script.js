const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const ampmEl = document.querySelector('.ampm');
const monthEl = document.querySelector('.month');
const dayEl = document.querySelector('.day');
const dateEl = document.querySelector('.date');
const yearEl = document.querySelector('.year');

function digitalClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let month = new Date();
    let monthName = monthArr[month.getMonth()];
    let day = days[month.getDay()];
    let date = new Date().getDate();
    let year = new Date().getFullYear();
    let ampm = "AM";

    if (h > 11) {
        h = h - 12;
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;
    monthEl.innerText = monthName;
    dayEl.innerText = day;
    dateEl.innerText = date;
    yearEl.innerHTML = year;

    setTimeout(() => {
        digitalClock()
    }, 1000)
}

digitalClock()