// prompt the user for input
// if user enters C temp, convert it to F
// F = C * (9/5) + 32
//if user enters F temp, convert it to C
// C = (F - 32) / (9/5)
function convertTemp() {
// set the initial variables for c, f (celcius, fahrenheit)
var c = document.getElementById("c"),
var f = document.getElementById("f");
	if(c.value) {
		//set value for fahrenheit
		f.value = Math.round(c.value * (9/5) + 32);
	} else {
		//set value for celcius
		c.value = Math.round((f.value - 32) * 5/9);
	}
};