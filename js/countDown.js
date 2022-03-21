const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
let futureDate = new Date(2022, 4, 24, 11, 30, 0);
const hours = futureDate.getHours();
const years = futureDate.getFullYear();
const mins = futureDate.getMinutes();
const month = futureDate.getMonth();
const day = futureDate.getDay();
const date = futureDate.getDate();

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${date} ${months[month]}  ${years} ${hours}:${mins}am`;

//future time in ms
const futureTime = futureDate.getTime();

function getRemaindingTime() {
    const today = new Date().getTime();
    const time = futureTime - today;
    //1s =1000ms
    //1m= 60s
    //1hour=60min 
    //1d=24hours

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;
    let days = time / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((time % oneDay) / oneHour);
    let mins = Math.floor((time % oneHour) / oneMin);
    let secs = Math.floor((time % oneMin) / 1000);
    //set values arry
    const values = [days, hours, mins, secs];

    function foramt(item) {
        if (item < 10) {
            return (item = `0${item}`);
        } else {
            return item;
        }
    }

    items.forEach(function(item, index) {
        item.innerHTML = values[index]
    });

    if (time < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">
        sorry this giveaway has expired</h4>`
    }
};
let countdown = setInterval(getRemaindingTime, 1000);

getRemaindingTime();