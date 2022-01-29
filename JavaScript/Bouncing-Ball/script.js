document.body.style.backgroundColor = "#cfc2c2";

var wrapper = document.createElement("div");
document.body.appendChild(wrapper);

wrapper.style = `
    width: 600px;
    height: 600px;
    border: 1px solid black;
    position: relative;
    margin: 0 auto;
    margin-top: 80px;
    position: relative;
`;

var ball = document.createElement("div");
ball.style = `
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white; 
    position: absolute;
    left: 250px;
    top: 50px;
    text-align: center;
    padding-top: 15px;
    box-sizing: border-box;
`;

ball.innerHTML = "READY! CLICK!";
wrapper.appendChild(ball);

var directionTop = 1;
var directionLeft = 1;

ball.addEventListener('click', function(e){
    e.target.innerHTML = "GET SET";
    
        var interval = setInterval(function()
        {
            var newTop = parseInt(e.target.style.top) + (5*directionTop) +"px"; 
            e.target.style.top = newTop;
            e.target.innerHTML = "GOOO";
            //console.log("Top:" + newTop + " "+ directionTop); 
            

            
            if(parseInt(newTop) <= 0 || parseInt(newTop) >= (wrapper.clientHeight - ball.clientHeight)){
                e.target.innerHTML = "GO BACK";
                directionTop *= -1;
            }

            //left

            var newLeft = parseInt(e.target.style.left) + (5 * directionLeft) +"px";
            e.target.style.left = newLeft;
            // console.log("Direction:" +  newLeft  + directionTop); 
            // console.log("Direction new:" +newLeft  + directionLeft); 
            if(parseInt(newLeft) <= 0 || parseInt(newLeft) >= wrapper.clientWidth - ball.clientWidth) {
                console.log(wrapper.clientWidth, ball.clientHeight);
                directionLeft *= -1;
            }


        }, 1000/60); //60fps
    
});


