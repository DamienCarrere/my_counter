/* ----------------------------------------------------- */

let myCounterTitle = document.createElement("h1");
myCounterTitle.textContent = "My Counter";

document.body.appendChild(myCounterTitle);

/* ----------------------------------------------------- */

let myCounter = document.createElement("h2");
myCounter.textContent = "0";

document.body.appendChild(myCounter);

/* ----------------------------------------------------- */

let incrementButton = document.createElement("button");
incrementButton.textContent = "Incrémenter +";
incrementButton.addEventListener("click", function () {
	let currentCount = parseInt(myCounter.textContent);
	myCounter.textContent = currentCount + 1;
});

document.body.appendChild(incrementButton);

/* ----------------------------------------------------- */

let decrementButton = document.createElement("button");
decrementButton.textContent = "Décrémenter -";
decrementButton.addEventListener("click", function () {
	if (myCounter.textContent > 0) {
		let currentCount = parseInt(myCounter.textContent);
		myCounter.textContent = currentCount - 1;
	}
});

document.body.appendChild(decrementButton);

/* ----------------------------------------------------- */

let resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", function () {
	let currentCount = parseInt(myCounter.textContent);
	myCounter.textContent = currentCount - currentCount;
});
document.body.appendChild(resetButton);

/* ----------------------------------------------------- */
