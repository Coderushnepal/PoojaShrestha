function Ball(size, id) {
    this.width = size;
    this.height = size;
  
    this.id = id;
  
    this.create = function (container, position) {
      this.element = document.createElement("div");
      this.element.setAttribute("id", this.id);
  
      this.element.style.width = this.width + "px";
      this.element.style.height = this.height + "px";
      this.element.style.borderRadius = "50%";
      this.element.style.background = '#'+ Math.floor(16777215*Math.random()).toString(16);
  
      this.element.style.position = "absolute";
      this.element.style.top = position.top + "px";
      this.element.style.left = position.left + "px";

      //added
  
      var defaultValue = 10;

      var directionTop = parseInt(Math.random() * defaultValue);
      var directionLeft = parseInt(Math.random() * defaultValue);

      this.element.addEventListener("click", function (e) {
        //   console.log(this.id);

        var interval = setInterval(function()
        {
            var newTop = parseInt(e.target.style.top) + ( directionTop) +"px"; 
            e.target.style.top = newTop;
            // console.log("New Top" + newTop);
            // console.log("Top" + directionTop);
            
            
            if(parseInt(newTop) <= 0 || parseInt(newTop) >= (containerSize - defaultBallSize)){
                directionTop *= -1;
            }
            

            var newLeft = parseInt(e.target.style.left) + (directionLeft) +"px";
            e.target.style.left = newLeft;
            // console.log("New Left" + directionLeft);
            // console.log("Left" + newLeft);

            if(parseInt(newLeft) <= 0 || parseInt(newLeft) >= containerSize - defaultBallSize) {
                directionLeft *= -1;
            }

        }, 1000/60); //60fps
      });
    //   console.log(this.element.clientWidth);
        
      container.appendChild(this.element);
    }; 
  }