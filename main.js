/* Brainstorm/Pseudocode:
- first I need to find a way to log the current time (and date)
- establish the format style I want to display
- if i want to create an analog clock i need to create the clock face and time hands
-
- create a function that logs the time
- date object?
- need methods that can give me the current hours, minutes, seconds
- maybe need to differentiate between am and pm?
- a way to choose the time to set the alarm
- store the date object of the alarm time that gets set
- a way to update/load? the time/text in the linked html file to display it
- the time also has to be updated live - not just logged and stamped
- need a function for setting the alarm
- need a way to set off the alarm... an alert?

*/

/*
function getTime() {
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const timeInterval = 6
}

setInterval(getTime, 100)
*/

//create the main function
function updateTime(){
    const dateTime = newDate();
// this should update the time div - newDate will hold the current time


    //here I need to set my variables and use the date object + methods to obtain the current time
    let hour = dateTime.getHours();
    // get current hour from 0-23
    let min = dateTime.getMinutes();
    // get current minute from 0-59
    let sec = dateTime.getSeconds();
    // get current seconds from 0-59

    //here I  need to store the date object of the alarm time that the user sets (null is like the temporary value)
    let alarmSet = null;


    hour = checkTime(hour);
    min = checkTime(min);
    sec = checkTime(sec);

    // this will change the corresponding text in the html file
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;

}


// need to add this to update the time in 1 second intervals - so the main updateTime function will run every second
// otherwise the time will be frozen...
// mdn - "...this method ... repeatedly calls a function or executes a code snippet, with a fixed time delay between each call"
// example format: setInterval(function, delay)
// delay - the time in milliseconds the timer should delay in between executions of the function (otherwise default to 0)
setInterval(updateTime, 1000)

// this function is added to fix the time elements as by default they will show only one digit, we need two for a normal clock
function checkTime(i){
    if (i < 10) {i ="0" + i};
    return i;
}
