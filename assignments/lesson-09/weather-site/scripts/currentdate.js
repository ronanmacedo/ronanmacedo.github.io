/*This javascript document displays the current date in the page*/
var d = new Date();

/* days of the week array */
var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

/* months of the year array */
var month = new Array(12);
    month[0] = "January";
    month[1] = "February"; 
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

/* display the result */
var n = weekday[d.getDay()] + "," + " " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();
    document.getElementById('currentdate').innerHTML = n; 