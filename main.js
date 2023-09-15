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
-
-
-


*/


function getTime() {
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const timeInterval = 6
}

setInterval(getTime, 100)
