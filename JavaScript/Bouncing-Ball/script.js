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

direction = 1;

ball.addEventListener('click', function(e){
    e.target.innerHTML = "GET SET";
    
        var interval = setInterval(function()
        {
            var newTop = parseInt(e.target.style.top) + (5*direction) +"px"; 
            e.target.style.top = newTop;
            e.target.innerHTML = "GOOO";
            // console.log(newTop); 

            
            if(parseInt(newTop) >= (wrapper.clientHeight - ball.clientHeight)){
                e.target.innerHTML = "GO BACK";
                direction *= -1;
            }

            if(parseInt(newTop) <= 0){
                e.target.innerHTML = "GO BACK";
                direction = 1;
            }

        }, 1000/60); //60fps
    
});


