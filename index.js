//Importing package that helps to trigger function at scheduled time
const cron = require("node-cron");

//Importing events
const events = require("./events");

/*
Looping to the events using forEach loop and assigning a function 
to trigger at scheduled time with the help of node-cron package
*/
events.forEach((el) => {
  let [second, minute, hour, dayOfMonth, month, dayOfWeek] = [
    el.dateTime.getSeconds(),
    el.dateTime.getMinutes(),
    el.dateTime.getHours(),
    el.dateTime.getDate(),
    el.dateTime.getMonth() + 1,
    el.dateTime.getDay(),
  ];

  cron.schedule(
    `${second} ${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`,
    () => {
      printEventText(el.text, el.text.length);
    }
  );
});

//Function that accepts text and duration, and consoles the text  backward
function printEventText(text, duration) {
  setTimeout(() => {
    console.log(text.split("").reverse().join(""));
  }, 1000 * duration);
}
