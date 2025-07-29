let divContainer = document.createElement("div");

document.body.appendChild(divContainer);

/* ----------------------------------------------------- */

let myCounterTitle = createAndAddElement("h1", "My Counter", divContainer);

/* -------------------------- Titre --------------------------- */

let myCounter = createAndAddElement("h2", "0", divContainer);

/* -------------------------- Incrément --------------------------- */

let incrementButton = createAndAddElement(
	"button",
	"Incrémenter +",
	divContainer
);
incrementButton.classList.add("buttonClass");
incrementButton.id = "increment";
incrementButton.addEventListener("click", function () {
	let currentCount = parseInt(myCounter.textContent);
	let limit = parseInt(limitField.value) || Infinity;
	if (currentCount < limit) {
		myCounter.textContent = currentCount + 1;
	}
});

/* --------------------------- Décrément -------------------------- */

let decrementButton = createAndAddElement(
	"button",
	"Décrémenter -",
	divContainer
);
decrementButton.classList.add("buttonClass");
decrementButton.id = "decrement";
decrementButton.addEventListener("click", function () {
	if (myCounter.textContent > 0) {
		let currentCount = parseInt(myCounter.textContent);
		myCounter.textContent = currentCount - 1;
	}
});

/* --------------------------- Reset -------------------------- */

let resetButton = createAndAddElement("button", "Reset", divContainer);
resetButton.classList.add("buttonClass");
resetButton.id = "reset";
resetButton.addEventListener("click", function () {
	myCounter.textContent = 0;
	limitField.value = "";
	limitText.textContent = "Limite actuelle : ∞";
});

/* --------------------------- Limite -------------------------- */

let limitText = createAndAddElement("p", "Limite actuelle : ∞", divContainer);
let limitField = createAndAddElement("input", "", divContainer);
document.createElement("input");
limitField.type = "number";
limitField.placeholder = "Entrez une valeur Max";
limitField.addEventListener("input", function () {
	limitText.textContent = "Limite actuelle : " + limitField.value;
	if (limitField.value == "") {
		limitText.textContent = "Limite actuelle : ∞";
		myCounter.textContent = 0;
	} else if (parseInt(myCounter.textContent) > limitField.value) {
		myCounter.textContent = limitField.value;
	}
});

// créer fonction createAndAddElement (type element qu'on veut créer, parent, contenu, elle prends ou pas un élément de référence (par exemple créer un h1 ou élément div avant le parent))

function createAndAddElement(type, content, parent, refParent) {
	let elementType = document.createElement(type);
	elementType.textContent = content;

	if (refParent) {
		parent.insertBefore(elementType, refParent);
	} else {
		parent.appendChild(elementType);
	}
	return elementType;
}
