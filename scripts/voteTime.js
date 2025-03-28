const votingTimeDay = document.getElementById("votingTimeDay");
const votingTimeHour = document.getElementById("votingTimeHour");
const votingTimeMinute = document.getElementById("votingTimeMinute");
const votingTimeSecond = document.getElementById("votingTimeSecond");

const voteDate =  new Date("May 12, 2025 00:00:00");


var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;

setInterval(() => {
    let currentDate = new Date();
    let dateLeft = new Date(voteDate - currentDate);

    var days = Math.floor(dateLeft / _day);
    var hours = Math.floor((dateLeft % _day) / _hour);
    var minutes = Math.floor((dateLeft % _hour) / _minute);
    var seconds = Math.floor((dateLeft % _minute) / _second);



    votingTimeDay.textContent = days;
    votingTimeHour.textContent = hours;
    votingTimeMinute.textContent = minutes;
    votingTimeSecond.textContent = seconds;

}, 1000)