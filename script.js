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
    rows = parseInt(prompt("Enter the number of Rows(same as Columns)","16"));
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
    let colorBtn = document.querySelector("#random");
    box.forEach(one => {
        one.removeEventListener("mouseover", setRgba);
        one.removeEventListener("mouseover", randomColor);
        one.addEventListener("mouseover", colorChanger);
    });
    if(area.getAttribute("value") === "black"){
        area.setAttribute("value", "white");
        btnn.style.backgroundColor="white";
        btnn.style.color="black";
        colorBtn.style.background = "";
        greyBtn.style.border="1px solid grey";
    }
    else{
        area.setAttribute("value", "black");
        btnn.style.backgroundColor="black";
        btnn.style.color="white";
        colorBtn.style.background = "";
        greyBtn.style.border="1px solid grey";
    }
}
function colorChanger(){
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
    let colorBtn = document.querySelector("#random");
    area.setAttribute("value", "black");
    toggleColor();
    box.forEach(one => {
        one.removeEventListener("mouseover", colorChanger);
        one.removeEventListener("mouseover", randomColor);
        one.addEventListener("mouseover", setRgba);
    });
    colorBtn.style.background = "";
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
    this.style.backgroundColor = "rgba(0, 0, 0, "+ aValue + ")"; 
    this.setAttribute("value", aValue);
}



btn = document.querySelector("#random");
btn.addEventListener("click", color);
function color(){
    let box = document.querySelectorAll(".grid-item");
    let area = document.querySelector("#sketchArea");
    let colorBtn = document.querySelector("#random");
    area.setAttribute("value", "black");
    toggleColor();
    box.forEach(one => {
        one.removeEventListener("mouseover", colorChanger);
        one.removeEventListener("mouseover", setRgba);
        one.addEventListener("mouseover", randomColor);
    });
    colorBtn.style.background = "linear-gradient(to right, orange , yellow, green, cyan, blue, violet)";
}
function randomColor(){
    let r, g, b;
    r = Math.ceil(Math.random() * 256);
    g = Math.ceil(Math.random() * 256);
    b = Math.ceil(Math.random() * 256);
    let finalValue = "rgb("+ r +", "+ g +", "+ b +")";
    this.style.backgroundColor = finalValue;
}