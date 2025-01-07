const main = document.querySelector("main");
const container = document.createElement("div");
container.classList.add("container");
const createGrid= (boxes)=>{
  container.innerHTML='';
  for (i = 0; i < boxes; i++) {
    for (j = 0; j < boxes; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.addEventListener('mouseover',()=>{
        const letters = "0123456789ABCDEF";
        let color="#";
        for (let i = 0; i < 6; i++) {
          color+=`${letters[Math.floor(Math.random()*16)]}`;
        }
        box.style.backgroundColor=color;
      });
      container.appendChild(box);
      box.style.cssText = `flex-basis: calc(75vmin/${boxes} - 0.5vmin); height: calc(75vmin/${boxes} - 0.5vmin);`;
    }
  }
}
createGrid(16);
const cleaner=document.querySelector('#cleaner');
cleaner.addEventListener('click',()=>{
  const boxes=document.querySelectorAll(".box") ;
  for(let box of boxes) {box.style.backgroundColor = "rgb(194, 203, 233)";}
})
const setDimension= document.querySelector('#setDimension')
setDimension.addEventListener('input',(event)=>{
  event.preventDefault();
  const boxes=document.querySelector("#dimensions").value
  createGrid(boxes)
});
main.appendChild(container);
