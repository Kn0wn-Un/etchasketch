makeFrame();
function makeFrame(numGrids = 4){
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
        let box = document.createElement("div");
        box.setAttribute("value", "btn-black");
        box.classList.add("grid-item");
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
        });
        area.appendChild(box);
    }
    let btn = document.querySelector("#toggle");
    btn.style.backgroundColor="black";
    btn.style.color="white";

}
let btn = document.querySelector("#clear");
btn.addEventListener("click", ()=>{location.reload()});
btn = document.querySelector("#toggle");
btn.addEventListener("click", ()=>{
    let box = document.querySelectorAll(".grid-item");
    box.forEach(one => {
            let btn = document.querySelector("#toggle");
            if(one.getAttribute("value") === "btn-black"){
                one.setAttribute("value", "btn-white");
                one.addEventListener("mouseover", (e) => {
                    e.target.style.backgroundColor = "white";
                });
                btn.style.backgroundColor="white";
                btn.style.color="black";
            }
            else{
                one.setAttribute("value", "btn-black");
                one.addEventListener("mouseover", (e) => {
                       e.target.style.backgroundColor = "black";
                });
                btn.style.backgroundColor="black";
                btn.style.color="white";
            }
    });
});
function getInput(){
    rows = prompt("Enter the number of Rows(same as Columns)","16");
    if(!rows){
        return;
    }
    if(rows > 100)
    {
        alert("Rows exceeding max value");
        return;
    }
    makeFrame(rows);
}
btn = document.querySelector("#rows");
btn.addEventListener("click", ()=>getInput());