var wrapper = document.createElement("div");
wrapper.style.margin = "0px auto";
wrapper.style.marginTop = "50px";
wrapper.style.width = "900px";

document.body.appendChild(wrapper);

//creating button

var btn = document.createElement("button");
btn.innerHTML = "Generate Balloons";

btn.style = `
    background-color: #3486eb;
    border: none;
    padding: 10px;
    color: #ffffff;
    font-family: 'Lora', serif;
    font-weight: bolder;
    font-size: 20px;
    margin: 30px;
`;


wrapper.appendChild(btn);

//creating the box

var boxWrapper = document.createElement("div");
boxWrapper.style.position = "relative";
boxWrapper.style.width = "800px";
boxWrapper.style.height = "400px";
boxWrapper.style.border = "1px solid black";
boxWrapper.style.marginTop = "50px";


wrapper.appendChild(boxWrapper);


btn.addEventListener("click", function(event){
    
    //creating balloons

    var balloon = document.createElement("div");

    boxWrapper.appendChild(balloon);

    balloon.style.width = "20px";
    balloon.style.height = "20px";
    balloon.style.borderRadius = "50%";
    balloon.style.position = "absolute";
    balloon.style.left = (boxWrapper.clientWidth - balloon.clientWidth) * Math.random() + 'px';
    balloon.style.top = (boxWrapper.clientHeight - balloon.clientHeight) * Math.random() + 'px'
    balloon.style.backgroundColor = '#'+Math.floor(16777215*Math.random()).toString(16);
    balloon.style.transitionDuration = ".3s";

});