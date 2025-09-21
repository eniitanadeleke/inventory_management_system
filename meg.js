const inventory = [];
function addInventory (id, name, price, quantity) {
  let newProduct = {
    id: id,
    name: name,
    price: price,
    quantity: quantity,
    lowStock: quantity < 10
  };
  inventory.push(newProduct);
}

addInventory(1, "shoe", 2000, 5);
console.log(inventory);

