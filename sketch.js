//declare global variables
let input1;
let threshold;

//declare & initialize at the same time
let ellipseX = 200;


function setup() {
  
  // initialize variables with a value
  input1 = 120; //datatype is integer
  threshold = 100; //datatype is an integer
  
  createCanvas(400, 400);
}

function draw() {
  background(125);
  
  input1 = mouseX; //use the system variable mouseX (which gives x-coord of the cursor) to assign a new value to the variable named input1
  
  if (input1 > threshold){ //if the value of the variable named input1 is greater than the value of the variable named threshold, execute code inside of curly brackets
      background(125); //color the background grey
    
    //(local variable)
    //constrain limits the output value to a specifed range
      let Y = constrain(mouseY, 100, height);
    
      ellipseX += random(0, 0); //add value from right side to the previous value of the variable on the left side
    
     ellipse(ellipseX, mouseY, 50,50);
  }
  
  else if(input1 > threshold / 2){ //code runs if the if statement is not satisfied
    let rChannel = int(map(input1, 50, 100, 255, 0));
      background(rChannel,125,250); //set bg to red
  }
  
  else{ //if the previous if & else if statements aren't satisfied, run code in the else statment between curly brackets
    
    //int() function turns data into integer type
    //map() function stretches / compresses data range
    let gChannel = int(map(input1, 0, 50, 255, 0));
    background(250,gChannel, 0);
    console.log(gChannel); //print value of input1 to the console
  }
  
}