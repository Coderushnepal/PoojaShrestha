function Book(name, page) {
    this.name = name;
    this.page = page;
  
    this.calculatePrice = function(rate) {
      return this.page*rate;
    };
  }
  
  const HP = new Book("HP", 200);
  
  // Implicit Binding
  console.log(HP.calculatePrice(10));
  
  const peterPan = {
    page: 90
  };
  
  // Explicit Binding
  
  console.log(HP.calculatePrice.call(peterPan, 20));
  console.log(HP.calculatePrice.apply(peterPan, [20]));
  
  const calculatePeterPanPrice = HP.calculatePrice.bind(peterPan);
  console.log(calculatePeterPanPrice(20));