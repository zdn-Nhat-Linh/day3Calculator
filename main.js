// ----------------- Normal JS
var result = document.getElementById("result");

// const insert = (char) => (result.value += char);

// const back = () => (result.value = result.value.slice(0, -1));

// const clean = () => (result.value = "");

// function calculate() {
// 	try {
// 		result.value ? (result.value = eval(result.value)) : alert("Please enter a number");
// 	} catch (e) {
// 		alert("You have entered an invalid expression");
// 	}
// }

// ----------------- Normal JS with switch
// function operate(char) {
// 	switch (char) {
// 		case "back":
// 			result.value = result.value.slice(0, -1);
// 			break;
// 		case "clean":
// 			result.value = "";
// 			break;
// 		case "calculate":
// 			try {
// 				result.value ? (result.value = eval(result.value)) : (result.value = "0");
// 			} catch (e) {
// 				alert("You have entered an invalid expression");
// 			}
// 			break;
// 		default:
// 			result.value += char;
// 	}
// }

// ----------------- OOP
// class calculator {
// 	constructor() {
// 		this.result = document.getElementById("result");
// 	}

// 	insert = (char) => (this.result.value += char);

// 	back = () => (this.result.value = this.result.value.slice(0, -1));

// 	clean = () => (this.result.value = "");

// 	calculate = () => {
// 		try {
// 			result.value ? (result.value = eval(result.value)) : (result.value = "0");
// 		} catch (e) {
// 			alert("You have entered an invalid expression");
// 		}
// 	};
// }

// const calc = new calculator();
