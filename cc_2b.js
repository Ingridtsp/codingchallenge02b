//Create and Initialize Variables

//Item name
const itemName = "Wireless Keyboard";

//Values for inventory calculation
const unitCost = 35.50; // Cost per unit
let currentStock = 60; // Current number of units on hand
const reorderLevel = 75; // The stock level at which a reorder is triggered
const targetStock = 200; // The desired stock level after reordering
const weeklyDemand = 20; // Average units sold per week
const supplierLeadTimeWeeks = 2; // Time in weeks to receive an order


//Calculate Inventory Metrics

// Calculate how many weeks the current stock will last based on weekly demand.
// If demand is zero, coverage is infinite to prevent division by zero.
const weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;

// Calculate the number of units needed to reach the target stock.
const stockDeficit = Math.max(0, targetStock - currentStock);

// Determine if a reorder is needed.
// This is true if stock is at or below the reorder level OR if the weeks of cover is less than the supplier lead time.
const reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

// Determine the quantity to reorder.
// If a reorder is needed, it's the stock deficit (rounded up). Otherwise, it's 0.
const reorderQuantity = reorderNow ? Math.ceil(stockDeficit) : 0;

// Calculate the total cost of the reorder.
const estimatedReorderCost = reorderQuantity * unitCost;


//Print to Console

console.log("--- Inventory Reorder Assistant ---");
console.log(`Item Name: ${itemName}`);
console.log("-----------------------------------");
console.log(`Weeks of Cover: ${weeksOfCover.toFixed(2)}`);
console.log(`Reorder Now?: ${reorderNow}`);
console.log(`Recommended Reorder Quantity: ${reorderQuantity}`);
console.log(`Estimated Reorder Cost: $${estimatedReorderCost.toFixed(2)}`);
console.log("-----------------------------------");
