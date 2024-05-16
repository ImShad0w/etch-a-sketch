const container = document.getElementById("container");
const resize = document.getElementById("resize")
let size;

function createGrid(rows, cols){
  for (let i = 0; i < (rows * cols); i++){
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare")
    container.appendChild(gridSquare);
    gridSquare.addEventListener("mouseover", (event) =>{
    gridSquare.style.cssText += "background-color: rgb(" + changeBackground() + "," + changeBackground() + "," + changeBackground() + ");";
  });
  };
};

resize.addEventListener("click", function changeSize(size){
  size = parseInt(prompt("Type number between 0, 100"))
  container.innerHTML = "";
  if(size < 100){
    createGrid(size, size);
  }
  else{
    alert("That number is not valid!")
    createGrid(16,16)
  };
});


function changeBackground(num){
  value = Math.floor(Math.random() * 255)
  return value;
}

createGrid(16, 16);
