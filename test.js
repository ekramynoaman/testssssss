'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */

function timeConversion(s) {
    s = s.toUpperCase();
    s

   // Check if 'PM' Exist 
   let pm = s.match('PM') ? true:false;
   // Split the string To array
   s = s.split(':');
   // Get variables 
   let hour = s[0];
   let min = s[1];
   let sec = s[2]
   // If the time is pm
   if(pm){
    // Check if it 12 
    if(hour == 12){
        hour = s[0];
    }else{
       // Convert the time from 12 system to 24 system
       hour = parseInt(s[0],10) + 12
       // Remove 'PM'
       sec = s[2].replace('PM', '');
    }
       
   }else{

        hour = s[0];
        // Remove 'AM'
        sec = s[2].replace('AM', '');
        // Check if it 12
        if(hour == 12){
            hour = '00';

        }
         
   }
    // Get the time 
    s = hour + ':' + min + ':' + sec
    return s;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}


console.log(timeConversion('12:05:45am'));
console.log(timeConversion('12:05:45pm'));



