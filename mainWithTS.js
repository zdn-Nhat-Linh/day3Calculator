var inputElement = document.getElementById("result");
function operate(char) {
    if (!inputElement)
        throw new Error("Element not found");
    switch (char) {
        case "back":
            inputElement.value = inputElement.value.slice(0, -1);
            break;
        case "clean":
            inputElement.value = "";
            break;
        case "calculate":
            try {
                inputElement.value
                    ? (inputElement.value = eval(inputElement.value))
                    : (inputElement.value = "0");
            }
            catch (e) {
                alert("You have entered an invalid expression");
                inputElement.value = "";
            }
            break;
        default:
            inputElement.value += char;
    }
}
// class Calculator {
// 	private inputElement: HTMLInputElement;
// 	constructor() {
// 		this.inputElement = document.getElementById("result") as HTMLInputElement;
// 	}
// 	insert = (char: string): void => {
// 		this.inputElement.value += char;
// 	};
// 	back = (): void => {
// 		this.inputElement.value = this.inputElement.value.slice(0, -1);
// 	};
// 	clean = (): void => {
// 		this.inputElement.value = "";
// 	};
// 	calculate = (): void => {
// 		try {
// 			this.inputElement.value
// 				? (this.inputElement.value = eval(this.inputElement.value))
// 				: (this.inputElement.value = "0");
// 		} catch (e) {
// 			alert("You have entered an invalid expression");
// 			this.inputElement.value = "";
// 		}
// 	};
// }
// const calc = new Calculator();
