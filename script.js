

(function() {

let charPosition = 0;
let charDirection = 'east';

function moveForward (forward) {
  if (charDirection === 'east') {
    charPosition += forward;
   } else {charPosition -= forward; 
   }
}
function moveBackward (backward) {
  if (charDirection === 'east') {
    charPosition -= backward;
} else {charPosition += backward;}
}
function turnAround () {
 if (charDirection === 'east') {
    charDirection = 'west';
 } else {charDirection = 'east';
 }
}
function printLocation () {
  console.log(charPosition);
}

moveForward(5);
moveBackward(3);
printLocation();
turnAround();
moveForward(10);
moveBackward(5);
printLocation();

} )();