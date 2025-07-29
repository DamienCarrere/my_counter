const counterDisplay = document.getElementById("counter");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");
const maxInput = document.getElementById("maxValue");
const maxValueDisplay = document.getElementById("maxValueDisplay");

let count = 0;
let maxValue = Infinity;

incrementBtn.addEventListener("click", () => {
	if (count < maxValue) {
		count++;
		updateDisplay();
	}
});

decrementBtn.addEventListener("click", () => {
	count--;
	updateDisplay();
});

resetBtn.addEventListener("click", () => {
	count = 0;
	updateDisplay();
});

maxInput.addEventListener("input", (e) => {
	const value = parseInt(e.target.value, 10);
	maxValue = isNaN(value) ? Infinity : value;
	maxValueDisplay.textContent = isNaN(value) ? "∞" : value;
});

function updateDisplay() {
	counterDisplay.textContent = count;
}
