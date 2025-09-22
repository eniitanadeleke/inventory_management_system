const inventory = [];

function addInventory (id, name, price, quantity) {
  let newProduct = {
    id: id,
    name: name,
    price: price,
    quantity: quantity,
    // lowStock: quantity < 10;
  };
  inventory.push(newProduct);
  
}

addInventory(1, "shoe", 2000, 10);
addInventory(2, "Bag", 2000, 10);
addInventory(3, "Wig", 2000, 10);
addInventory(4, "Cap", 2000, 5);
console.log(inventory);

//function to remove a product
function removeProduct(id) {


    inventory.forEach((goods, index) => {
        if (goods.id === id) {
            inventory.splice(index, 1); // Remove 1 element at this index
            console.log(`Product with id ${id} removed successfully.`);
        }else {
            console.log("product not found")
        }
    });
}
removeProduct(1);
console.log(inventory)


//function to update the quantity
function updateStock(id, quantity, name) {
    let found = false; // checks to see if the product exist.

    inventory.forEach((goods, index) => {
        if (goods.id === id && goods.name === name) {
            inventory[index].quantity += quantity;
            found = true; // mark as found
            console.log(`${goods.name} stock updated. New quantity: ${inventory[index].quantity}`);
        }
    });

    if (!found) {
        console.log("Product not found");
    }
}


updateStock(4, 1, "Cap"); 


//function to print the summary of our inventory
function report () {
    let totalGoods  = inventory.length;
    let lowStockItems = [];
    let totalQuantity = 0;
    let lowStock = inventory.quantity < 10

    inventory.forEach((goods) => {

        if (goods.quantity < 10) {
            lowStockItems.push(goods.name, goods.quantity);
        }

        totalQuantity += goods.quantity;

    });

    console.log("This is the inventory:", inventory);
    console.log("This is the ntotal number of goods:", totalGoods)
    console.log("this is the list of lowStock items:", lowStockItems);
    console.log("this the total quantity:", totalQuantity);
};
report();




