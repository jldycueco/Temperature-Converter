//Select Input using DOM
const input            = document.querySelector("#celcInput"),
//Select Output using DOM
	  fahrenheitOutput = document.querySelector("#fahrenheitOutput"),
	  kelvinOutput     = document.querySelector("#kelvinOutput");

document.querySelector("#output").style.visibility = "hidden";
input.addEventListener("input", (e) => {
	//Iniatilize Input Value
	const c = e.target.value;

	//Convert and Output Value
	fahrenheitOutput.innerHTML =  ((c * 9 / 5) + 32).toFixed(2);
	kelvinOutput.innerHTML = (c*1.0 + 273.15).toFixed(2);

	document.querySelector("#output").style.visibility = "visible";
});