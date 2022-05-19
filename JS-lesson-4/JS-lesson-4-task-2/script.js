class Calculator {
	constructor(value_1, value_2) {
		if (typeof value_1 !== 'number' || typeof value_2 !== 'number' || !isFinite(value_1) || !isFinite(value_2)) {
			throw new Error('Введенные значения не являются валидными числами');
		}
		this.value_1 = value_1;
		this.value_2 = value_2;
	}
	setX = (num) => {
		if (typeof num !== 'number' || !isDefined(num) || !isFinite(num)) {
			throw new Error('Введенное значени не является валидным числом или не был передан как параметр');
		}
		this.value_1 = num;
	}
	setY = (num) => {
		if (typeof num !== 'number' || !isDefined(num) || !isFinite(num)) {
			throw new Error('Введенное значени не является валидным числом или не был передан как параметр');
		}
		this.value_2 = num;
	}
	logSum = () => {
		console.log(this.value_1 + this.value_2);
	}
	logMul = () => {
		console.log(this.value_1 * this.value_2);
	}
	logSub = () => {
		console.log(this.value_1 - this.value_2);
	}
	logDiv = () => {
		if (this.value_2 === 0) {
			throw new Error('Второе число равняется нулю');
		}
		console.log(this.value_1 / this.value_2);
	}
}
function isDefined(value) {
	return value !== null && value !== undefined;
}