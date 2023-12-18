function createGrid() {
	const gridSize = document.getElementById("gridSize").value;
	const gridContainer = document.getElementById("gridContainer");
	// start by setting grid container as empty
	gridContainer.innerHTML = "";

	gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

	for (let i = 0; i < gridSize; i++) {
		for (let j = 0; j < gridSize; j++) {
			const gridItem = document.createElement("div");
			gridItem.classList.add("grid-item");

			// Sets the background color black based on diagonal's position
			if (i + j === gridSize - 1) {
				gridItem.style.backgroundColor = "black";
			} else {
				gridItem.style.backgroundColor = "white";
			}

			gridContainer.appendChild(gridItem);
		}
	}
}

const createGridButton = document.getElementById("create-grid");

createGridButton.addEventListener("click", createGrid);
