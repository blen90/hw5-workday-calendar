var hourEl;
const timeBlock = $("#timeBlock");

// Set currentDayEl to display currentDay in the header
var currentDayEl = moment();
$("#currentDay").text(currentDayEl.format("dddd, MMMM Do"));

//What hour of the day it is
var currentHour = moment().format("hh:" + "mm" + "a");
console.log(currentHour);





    


