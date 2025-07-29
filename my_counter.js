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
	limitField.value = "";
	limitText.textContent = "∞";
});
divContainer.appendChild(resetButton);

/* --------------------------- Limite -------------------------- */

let limitText = document.createElement("p");
let limitField = document.createElement("input");
limitText.textContent = "∞";
limitField.type = "number";
limitField.placeholder = "Entrez une valeur Max";
limitField.addEventListener("input", function () {
	limitText.textContent = limitField.value;
	if (limitField.value == "") {
		limitText.textContent = "∞";
		myCounter.textContent = 0;
	} else if (parseInt(myCounter.textContent) > limitField.value) {
		myCounter.textContent = limitField.value;
	}
});
divContainer.appendChild(limitField);
divContainer.appendChild(limitText);
