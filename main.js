var result = document.getElementById("result");

const insert = (char) => (result.value += char);

const back = () => (result.value = result.value.slice(0, -1));

const clean = () => (result.value = "");

function calculate() {
	try {
		result.value ? (result.value = eval(result.value)) : alert("Please enter a number");
	} catch (e) {
		alert("You have entered an invalid expression");
	}
}
