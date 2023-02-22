const inputElement = document.getElementById("result") as (HTMLElement & { value: string }) | null;

function operate(char: string): void {
	if (!inputElement) throw new Error("Element not found");
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
			} catch (e) {
				alert("You have entered an invalid expression");
			}
			break;
		default:
			inputElement.value += char;
	}
}

// class Calculator {
// 	private result: HTMLInputElement;

// 	constructor() {
// 		this.result = document.getElementById("result") as HTMLInputElement;
// 	}

// 	insert = (char: string): void => {
// 		this.result.value += char;
// 	};

// 	back = (): void => {
// 		this.result.value = this.result.value.slice(0, -1);
// 	};

// 	clean = (): void => {
// 		this.result.value = "";
// 	};

// 	calculate = (): void => {
// 		try {
// 			this.result.value ? (this.result.value = eval(this.result.value)) : (this.result.value = "0");
// 		} catch (e) {
// 			alert("You have entered an invalid expression");
// 		}
// 	};
// }
// const calc = new Calculator();
