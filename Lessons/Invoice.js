const menuItems = [
    {name: "rice", price: 50, description: "Fried with coconout oil"},
    {name: "pasta", price: 35, description: "With red, chilli tomato sauce"},
    {name: "sushi", price: 45, description: "Sushi with raw salmon fish"},
  ];
  
  const calculateAddition = (food, quantity, customer="Guest") => {
    const menuItem = menuItems.find(item => item.name == food);
    const {name, price, description } = menuItem;
    
    //initializing our variable
    let totalCost = 0;
    let tip = 0;
    let totalBill = 0;
    let VAT_PERCENTAGE = 0.17;
    
    totalCost = price * quantity;
    
    if (totalCost <= 200) {
      tip = totalCost * 0.15;
    } else {
      tip = totalCost * 0.20;
    }
    
    totalBill = totalCost + tip;
    
    totalBill += totalBill * VAT_PERCENTAGE;
    
    //totalBill = totalBill + (totalBill * VAT_PERCENTAGE);
    
    printBill(customer, totalCost, tip, totalBill)
    
  }
  
  function printBill(customer, totalCost, tip, totalBill) {
    console.log(`=====================\nThank you ${customer} for visiting us. \nTotal cost: $ ${totalCost} \nGratuity: $ ${tip}. \nTotal Payable Amount (VAT 17%): $ ${totalBill}`);
  }
  
  calculateAddition("rice", 2, "Manzi");
  calculateAddition("rice", 2, "Sandrine");
  calculateAddition("rice", 2, "Sandrine Two");
  calculateAddition("sushi",16, "Gerard");