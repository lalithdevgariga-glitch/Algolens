let array = [];

function generateArray() {
  array = [];
  const container = document.getElementById("bars-container");
  container.innerHTML = "";

  for (let i = 0; i < 20; i++) {
    let value = Math.floor(Math.random() * 250) + 20;
    array.push(value);

    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = value + "px";
    container.appendChild(bar);
  }
}

generateArray();

document.getElementById("generateBtn").addEventListener("click", generateArray);
async function bubbleSort() {
  const bars = document.querySelectorAll(".bar");
  
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      
      bars[j].style.backgroundColor = "#ff6b6b";
      bars[j + 1].style.backgroundColor = "#ff6b6b";
      
      await new Promise(resolve => setTimeout(resolve, 100));
      
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        
        bars[j].style.height = array[j] + "px";
        bars[j + 1].style.height = array[j + 1] + "px";
      }
      
      bars[j].style.backgroundColor = "#00ffcc";
      bars[j + 1].style.backgroundColor = "#00ffcc";
    }
    bars[array.length - 1 - i].style.backgroundColor = "#ffffff";
  }
}

document.getElementById("bubbleBtn").addEventListener("click", bubbleSort);