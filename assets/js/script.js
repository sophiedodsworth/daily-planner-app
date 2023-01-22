// display the current date and time

var currentDate = moment().format('dddd [the] Do [of] MMMM');
$("#currentDay").html(currentDate);

//  code included within this will only run once the page DOM is ready for the js code to execute

$(document).ready(function () {

// calls function when the save button is clicked

    $(".saveBtn").on("click", function () {

// relates to jquery

        var text = $(this).siblings(".entry").val();
        var time = $(this).parent().attr("id");

// saves the text inputted by the user in local storage

        localStorage.setItem(time, text);

    })

// declaring function

function workDayTracker() {

// declaring current time variable with the current hour

    var currentTime = moment().hour();

// loop to go over the timeblocks

    $(".time-block").each(function () {
        var blockOfTime = parseInt($(this).attr("id").split("hour")[1]);

// start of if else statement
// if the block of time is less than the current time, this method removes the future and present class names from the selected elements and adds the past class

        if (blockOfTime < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }

// continuation of the if else statement
// if the block of time is the same as the current time, this method removes the past and future class names from the selected elements and adds the present class

        else if (blockOfTime === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }

// end of the if else statement
// if the block of time is anything else other than what's been execudted in the if else statement so far, this method removes the past and present class names from the selected elements and adds the future class

        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

// collect data from the local storage

    $("#hour8 .entry").val(localStorage.getItem("hour8"));
    $("#hour9 .entry").val(localStorage.getItem("hour9"));
    $("#hour10 .entry").val(localStorage.getItem("hour10"));
    $("#hour11 .entry").val(localStorage.getItem("hour11"));
    $("#hour12 .entry").val(localStorage.getItem("hour12"));
    $("#hour13 .entry").val(localStorage.getItem("hour13"));
    $("#hour14 .entry").val(localStorage.getItem("hour14"));
    $("#hour15 .entry").val(localStorage.getItem("hour15"));
    $("#hour16 .entry").val(localStorage.getItem("hour16"));
    $("#hour17 .entry").val(localStorage.getItem("hour17"));


// running the function

    workDayTracker();
})