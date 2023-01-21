// display the current date and time

var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

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