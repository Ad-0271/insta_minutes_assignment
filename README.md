# insta_minutes_assignment

## Language/Frameword used:
This assignment is created using NodeJS. The assignment contains two files one is index.js and another is events.js.
The events.js file exports the array of all the 10 events.

## Approach to solve:
Solved the assignment by using node-cron package. Node-cron is a job scheduling package which schedules a job at given time and date.
I'm looping over events only once and assigned a function to trigger at given dateTime of event using node-cron package.

## Problem faced:
Problem I faced during assignment is that I'm trying to solve the assignment without any npm package using setInterval. Basically
I'm looping over events on every 100 milliseconds and if current date and time matches the given dateTime of events then trigger a function 
to console the event text after the duration of length of text, this method is working but I've to loop over events on every 100 milliseconds
and this is affecting my performance. To tackle this I've used node-cron package.

## Steps to run this assignment:
1. Download this repository or fork in your computer.
2. Run 'npm i' or 'npm install' command and install the dependencies
3. Before running the program change the dateTime of events from event.js file
4. Run 'node index.js' command to run the program
