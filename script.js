let btn = document.querySelector("#clear");
btn.addEventListener("click", () => {location.reload()});

function makeFrame(numGrids = 16){
    let area = document.querySelector("#sketchArea");
    area.setAttribute("value", "white");
    area.innerHTML="";
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
        box.setAttribute("value", "0");
        box.classList.add("grid-item");
        box.style.backgroundColor = "rgba(255, 255, 255, 0)"
        area.appendChild(box);
    }
    let btn = document.querySelector("#toggle");
    toggleColor();
}
makeFrame();



btn = document.querySelector("#rows");
btn.addEventListener("click", getInput);
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



btn = document.querySelector("#toggle");
btn.addEventListener("click", toggleColor);
function toggleColor(){
    let box = document.querySelectorAll(".grid-item");
    let area = document.querySelector("#sketchArea");
    let btnn = document.querySelector("#toggle");
    let greyBtn = document.querySelector("#gray");
    box.forEach(one => {
        one.removeEventListener("mouseover", setRgba);
        one.addEventListener("mouseover", colorChanger);
    });
    if(area.getAttribute("value") === "black"){
        area.setAttribute("value", "white");
        btnn.style.backgroundColor="white";
        btnn.style.color="black";
        greyBtn.style.border="1px solid grey";
    }
    else{
        area.setAttribute("value", "black");
        btnn.style.backgroundColor="black";
        btnn.style.color="white";
        greyBtn.style.border="1px solid grey";
    }
}
function colorChanger(){
    console.log(this.style.backgroundColor)
    let area = document.querySelector("#sketchArea");
    if(area.getAttribute("value") === "black"){
        this.style.backgroundColor = "rgba(0, 0, 0, 1)";
        this.setAttribute("value", "1");
    }
    else{
        this.style.backgroundColor = "rgba(255, 255, 255, 0)"; 
        this.setAttribute("value", "0");
    }   
}



btn = document.querySelector("#gray");
btn.addEventListener("click", grey);
function grey(){
    let box = document.querySelectorAll(".grid-item");
    let greyBtn = document.querySelector("#gray");
    let area = document.querySelector("#sketchArea");
    area.setAttribute("value", "black");
    toggleColor();
    box.forEach(one => {
        one.removeEventListener("mouseover", colorChanger);
        one.addEventListener("mouseover", setRgba);
    });
    greyBtn.style.border="2px solid green";
}
function setRgba(){
    aValue = parseFloat(this.getAttribute("value"));
    aValue += (1/10);
    aValue = aValue.toFixed(1);
    if(aValue > 0.9){
        this.style.backgroundColor = "rgba(0, 0, 0, 1)";
        this.setAttribute("value", "1");
        return;
    }  
    console.log(aValue);
    this.style.backgroundColor = "rgba(0, 0, 0, "+ aValue + ")"; 
    this.setAttribute("value", aValue);
}