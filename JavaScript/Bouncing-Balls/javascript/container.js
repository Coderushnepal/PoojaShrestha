document.body.style.backgroundColor = "#000000";

function Container(size) {
    this.size = size;
  
    this.create = function () {
      this.element = document.createElement("div");
      this.element.style.width = this.size + "px";
      this.element.style.height = this.size + "px";
      this.element.style.border = "1px solid black";
      this.element.style.position = "relative";
      this.element.style.margin = "0 auto";
      this.element.style.backgroundColor = "#ffffff";

      document.body.appendChild(this.element);
    };
  }