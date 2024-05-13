const container = document.getElementById("container");

for (let i = 0; i < 16; i++){
  const row = document.createElement("div");
  row.className = "row";
  container.appendChild(row);

  for (let i = 0; i < 17; i++){
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item"
    row.appendChild(gridItem)
    gridItem.addEventListener("mouseover", (event) =>{
      gridItem.style.background = "black"
    })
  }
}



