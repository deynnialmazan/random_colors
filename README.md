## Generate random colors in JavaScript

### Basic concepts: 
In JavaScript, colors are represented as strings in a specific format. The format depends on 
the color model being used. The next are two main color models that are commonly used in 
JavaScript: RGB and HEX.

<b><i>RGB Colors:</b></i>

RGB stands for Red, Green, and Blue. Each color is represented as an integer between 0 and 255.
RGB colors are represented as a string in the format "rgb(red, green, blue)". For example, the 
color red would be represented as "rgb(255, 0, 0)".

<b><i> HEX Colors:</b></i>

HEX colors are represented as a six-digit code that represents a color. Each digit can be a 
number between 0 and 9 or a letter between A and F. The first two digits represent the red component,
the second two digits represent the green component, and the last two digits represent the blue component.
HEX colors are represented as a string in the format "#RRGGBB". For example, the color red would be 
represented as "#FF0000".

In addition to these color models, there are also other color models that can be used in JavaScript,
such as HSL, CMYK and HSV. However, the most used are RGB and HEX. 

### Methods for generate a random color: 

- Method 1: Using RGB values

One way to generate a random color in JavaScript is to use RGB values. To generate a random color, 
we can use the ```Math.random()``` function to generate three random values between 0 and 255, and use them 
as the RGB values. Here's some code that will do this:

```javascript
//Method 1: Generating a random color using RGB values
function getRandomColorRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  
// Example usage
console.log(getRandomColorRGB()); // Outputs will be something like "rgb(245, 54, 216)"
```

This function ```getRandomColorRBG``` will generate a random color and return it as a string in the 
format "rgb(r, g, b)", where r, g, and b are the red, green, and blue values
respectively.

- Method 2: Using HEX values

Another way to generate a random color in JavaScript is to use HEX values. 
To generate a random HEX value, we can use the ```Math.random()``` function to generate 
six random digits and use them as the HEX value. Here's some code that will do this:

```javascript
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
```

This function ```getRandomColorHEX()``` will generate a random color and return it as a string in the 
format "#RRGGBB", where RR, GG, and BB are the red, green, and blue values 
respectively, represented in hexadecimal.

That's it! You now have two different methods for generating a random color in 
JavaScript.
