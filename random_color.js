'use strict';

//Method 1: Generating a random color using RGB values
function getRandomColorRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  
// Example usage
console.log(getRandomColorRGB()); // Outputs will be something like "rgb(245, 54, 216)"

//Method 2: Generating a random color using HEX values
function getRandomColorHEX() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// Example usage
console.log(getRandomColorHEX()); // Outputs will be something like "#3A7BCD"


