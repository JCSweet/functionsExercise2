

(function() {

let charXPosition = 0;
let charYPosition = 0;
let charDirection = 'north';

function moveForward (forward) {
  if (charDirection === 'east') {
    charXPosition += forward;
   } else if (charDirection === 'north') {
     charYPosition += forward;
   } else if (charDirection === 'west') {
    charXPosition -= forward; 
   } else if (charDirection === 'south') {
    charYPosition -= forward; 
   }
}

function moveBackward (backward) {
  
  if (charDirection === 'east') {
    charXPosition -= backward;
    } else if (charDirection === 'north') {
      charYPosition -= backward;
    } else if (charDirection === 'west') {
    charXPosition += backward; 
    } else if (charDirection === 'south') {
    charYPosition += backward; 
    }
  }

function turnRight () {
 if (charDirection === 'east') {
    charDirection = 'south';
 } else if (charDirection === 'south') {
   charDirection = 'west';
 } else if (charDirection === 'west') {
  charDirection = 'north';
} else {charDirection = 'east'}
}

function turnLeft () {
  if (charDirection === 'east') {
     charDirection = 'north';
  } else if (charDirection === 'north') {
    charDirection = 'west';
  } else if (charDirection === 'west') {
   charDirection = 'south';
 } else {charDirection = 'east'}
 }

function printLocation () {
  if (charYPosition > 0 && charXPosition > 0) {
  console.log(`${charYPosition} N, ${charXPosition} E`);
  } else if(charYPosition < 0 && charXPosition > 0) {
    console.log(`${charYPosition} N, ${charXPosition} E`);
  } else if(charYPosition > 0 && charXPosition < 0) {
    console.log (`${charYPosition} N, ${charXPosition} E`);
  } else if(charYPosition < 0 && charXPosition < 0) {
    console.log(`${charYPosition} N, ${charXPosition} E`);
  } else {
    console.log(`${charYPosition} N, ${charXPosition} E`);
  }
}

moveForward(5);
turnRight();
moveForward(2);
printLocation();
turnLeft();
turnLeft();
moveForward(7);
turnRight();
moveBackward(3);
printLocation();

} )();
