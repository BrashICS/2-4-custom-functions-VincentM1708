/**
 * 2.4 - Custom Functions
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * This is a playground. Feel free to play.
 **/ 


// Example custom function using Number() and prompt()
function circle_area() {

    let radius = Number(prompt("What is the radius of the circle?"));

    console.log(`The area is: ${Math.PI * radius**2}`);

}


// Celsius = (Fahrenheit - 32) * 5/9
// Fahrenheit = (Celsius * 9/5) + 32

/*****  Your code goes below  *****/
//Task part 1
function to_fahrenheit() {

let celsius = +prompt("What is the heat in Celsius?")
let fahrenheit = 0
fahrenheit = (celsius * 9/5) + 32
console.log(`${fahrenheit}° Fahrenheit is equal to ${celsius}° Celsius`)
}

//Task part 2
function to_celsius() {

    let fahrenheit = +prompt("What is the heat in Fahrenheit?")
    let celsius = 0
    celsius = (fahrenheit - 32) * 5/9
    console.log(`${celsius}° Celsius is equal to ${fahrenheit}° Fahrenheit`)

}

//Task part 3
function roll_d10() {

console.log(Math.ceil)(Math.random() *10)
}
