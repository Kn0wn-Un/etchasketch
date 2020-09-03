makeframe();
function makeframe(numGrids = 100){
    area = document.querySelector("#sketchArea");
    let rows="";
    let col="";
    for(let i = 0; i < numGrids; i++)
    {
        rows += "auto ";
        col += "auto ";
    }
    area.style["grid-template-columns"] = col;
    area.style["grid-template-rows"] = rows;
    for(let i = 1; i <= numGrids**2; i++){
        box = document.createElement("div");
        box.setAttribute("id", ""+i);
        box.classList.add("grid-item");
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
        });
        area.appendChild(box);
    }

}
btn = document.querySelector("#clear");
btn.addEventListener("click", ()=>{location.reload()});
