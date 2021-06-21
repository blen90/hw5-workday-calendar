var hourEl = true;
console.log(hourEl);
var timeBlock = $("#timeBlock");

// Set currentDayEl to display currentDay in the header
var currentDayEl = moment();
$("#currentDay").text(currentDayEl.format("dddd, MMMM Do"));
console.log(currentDayEl);


//What hour of the day it is
var currentHourEl = moment();
$("#currentHour").text(currentHourEl.format("hh:" + "mm" + "a"));
console.log(currentHour);

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


var minutesForNextHour = 60 - minutesH;
console.log(minutesForNextHour)

var secondsForNextHour = minutesForNextHour * 60 * 1000;
console.log(secondsForNextHour);


// Color block 

function changeColors () {

        //minutesForNextHour = minutesForNextHour * 60 * 1000;
        currentHour = true;
        console.log(minutesForNextHour); {
        $(".description").foreach(function() {
            if((parseInt($(this).attr(".description")) ) <= currentHourEl) {
                $(this).addClass("past");
            };
            if((parseInt($(this).attr(".description")) ) === currentHourEl) {
                $(this).addClass("present");
            };
            if((parseInt($(this).attr(".description")) ) >= currentHourEl) {
                $(this).addClass("future");
            };
        });
        
    }
}
//     // Check time to update colors eve ry hour.

//     // setTimeout(changeColors, minutesForNextHour);
//     $(".saveBtn").on('click', function(event) {
//         event.preventDefault();
//         var textVal = $(this).prev().children("textarea").val();
//         var textTime = $(this).prev().attr("description");
//         for (var i = 0;i < apptsArr.length; i++){
//             if (apptsArr[i].time === textTime){
//                 apptsArr[i].msg = textVal;
//             }
//         }
//         localStorage.setItem('Appointments', JSON.stringify(apptsArr));
//         renderMsg();
//     })

//     var saveDescription = function() {
//         localStorage.setItem("events", JSON.stringify(savedDescription));
//       };
    

// //}


// //Click timeblock to enter an event

// //Save button for timeblock

// //Save data in the local storage

// //Saved event stays on page

    



// var currentDayEl = moment();
// $("#currentDay").text(currentDayEl.format("dddd, MMMM Do"));
// console.log(currentDayEl);

// var currentHour;

// hourUpdate();

// //Load saved activities from local storage
// loadSavedActivities();

// //Update time Interval

// var updateTime = setInterval(hourUpdate, 1000);

// function hourUpdate() {
//     var currentHour = moment();
//     $("#currentHour").text(currentHourEl.format("hh:" + "mm" + "a"));
//     console.log(currentHour);
//     timeBlock();

// }