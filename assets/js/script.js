// display the current date and time

var currentDate = moment().format('dddd, MMM Do YYYY');
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

    timeTracker();
})