var hourEl;
console.log(hourEl);



// Set currentDayEl to display currentDay in the header
var currentDayEl = moment();
$("#currentDay").text(currentDayEl.format("dddd, MMMM Do"));
console.log(currentDayEl);


//What hour of the day it is
var currentHourEl = moment();
$("#currentHour").text(currentHourEl.format("hh:" + "mm" + "a"));
console.log(currentHourEl);

//Is it AM or PM
var dayTime = moment().format("kk");
console.log(dayTime);
var amEl = moment().format("a");
console.log(amEl);
var pmEl = moment().format("A");

//Time for next hour
console.log(pmEl);
var minutesH = moment().format('m');
console.log(minutesH);


// var minutesForNextHour = 60 - minutesH;
// console.log(minutesForNextHour)

// var secondsForNextHour = minutesForNextHour * 60 * 1000;
// console.log(secondsForNextHour);

//Update time

function updatecurrentHour() {
    setInterval(changeColor, 1000 * 60 * 60);

    changeColor();
}

function changeColor() {
    var currentHourEl = currentDayEl.hours();
    var timeBlock = $(".time-block");
    for (var i = 0; i < timeBlock.length; i++) {
        var group = timeBlock[i];
        console.log(group)
        if (parseInt(group.id.split("-")[0]) < currentHourEl) {

            $(group).addClass("past");
        }
        else if (parseInt(group.id.split("-")[0]) === currentHourEl) {
            $(group).removeClass("past");
            $(group).addClass("present");
        }
        else {
            $(group).removeClass("past");
            $(group).removeClass("present");
            $(group).addClass("future");
        }
    };

}

// all numbers have to be military numbers
//greater than 12 to military time
//get correct comparison 




changeColor();