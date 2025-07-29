let divContainer = document.createElement("div");

document.body.appendChild(divContainer);

/* ----------------------------------------------------- */

let myCounterTitle = document.createElement("h1");
myCounterTitle.textContent = "My Counter";

divContainer.appendChild(myCounterTitle);

/* -------------------------- Titre --------------------------- */

let myCounter = document.createElement("h2");
myCounter.textContent = "0";

divContainer.appendChild(myCounter);

/* -------------------------- Incrément --------------------------- */

let incrementButton = document.createElement("button");
incrementButton.textContent = "Incrémenter +";
incrementButton.addEventListener("click", function () {
	let currentCount = parseInt(myCounter.textContent);
	let limit = parseInt(limitField.value) || Infinity;
	if (currentCount < limit) {
		myCounter.textContent = currentCount + 1;
	}
});

divContainer.appendChild(incrementButton);

/* --------------------------- Décrément -------------------------- */

let decrementButton = document.createElement("button");
decrementButton.textContent = "Décrémenter -";
decrementButton.addEventListener("click", function () {
	if (myCounter.textContent > 0) {
		let currentCount = parseInt(myCounter.textContent);
		myCounter.textContent = currentCount - 1;
	}
});

divContainer.appendChild(decrementButton);

/* --------------------------- Reset -------------------------- */

let resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", function () {
	myCounter.textContent = 0;
});
divContainer.appendChild(resetButton);

/* --------------------------- Limite -------------------------- */

let limitField = document.createElement("input");
limitField.type = "number";
divContainer.appendChild(limitField);
