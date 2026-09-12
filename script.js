//Phase 1: Store & Service Fee Setup
//Create a single object named storeInfo.
//This object will represent the restaurant details and baseline charges for a table.

let storeInfo = {};

//Prompt the user for the store’s name, the tax rate (as a percentage, e.g., 8 for 8%), and a standard table/service fee applied to every bill.
//Store these values inside storeInfo with the properties name, taxRate, and tableFee.
storeInfo.name = prompt("Store name? ");
storeInfo.taxRate = prompt("Tax rate? ");
storeInfo.tableFee = prompt("Table fee? ");

//Log a welcome message to the console that prints the store name and the standard table fee.
console.log("Welcome to ", storeInfo.name, " The standard table fee is ", storeInfo.tableFee);

//Journal Prompt 1

//Phase 2: Interactive Item Collection
//Create an empty array named receiptItems. 
//You will use this array to dynamically store food items as they are ordered.
let receiptItems = [];

//Use a while loop combined with prompt() to continuously ask the user if they want to enter a new item
// (e.g., Y to continue, anything else to stop).
let continueOrder = prompt("Would you like to add another item? (y to continue)");

while (continueOrder === "y") {
    //Inside the loop, prompt for the item’s name and its price.
    let itemName = prompt("Name of item? ");
    let priceOf = prompt("Price of item? ");

    //Convert the price input to a number using Number().
    let itemPrice = Number(priceOf);

    //Package the name and price into an item object (e.g., { name: "Burger", price: 10.50 }).
    let itemInfo = {};
    itemInfo.name = itemName;
    itemInfo.price = itemPrice;

    //Add it to receiptItems using the .push() method.
    receiptItems.push(itemInfo);

    continueOrder = prompt("Would you like to add another item? (y to continue)");

}

//Once the loop ends, log the total count of items added and print the receiptItems array to the console to verify your data.

console.log("Number of items:", receiptItems.length);

//Journal Prompt 2

//Phase 3: Processing the Order with for...of
//Now that items are collected, process the order line-by-line using a loop.
//Iterate over the receiptItems array using a for...of loop.

let subtotal = 0;

//Print each item’s name and price to the console in a formatted string (e.g., Bean Burrito -- $3.40).
for (let item of receiptItems) {
    console.log(item.name, item.price);

    //Keep a running subtotal of all food item prices calculated inside the loop.
    subtotal = subtotal + item.price;
}

//After the loop completes, log the total food subtotal to the console.
console.log("Subtotal:", subtotal);

//Journal Prompt

//Phase 4: Order Modification & Final Bill
//Handle a last-minute order change and print the final computed receipt.
//Simulate a customer canceling their last item: use .pop() to remove the final object from receiptItems, and log a message naming the item that was removed.

let removedItem = receiptItems.pop();

console.log("Removed item:", removedItem);

//Recalculate the revised food subtotal from your array.

subtotal = 0;

for (let item of receiptItems) {
    subtotal = subtotal + item.price;
}

//Add the tableFee from storeInfo to the food subtotal to determine the gross subtotal.

let grossSubtotal = subtotal + Number(storeInfo.tableFee);

//Calculate the tax amount using taxRate from storeInfo.

let taxAmount = grossSubtotal * (Number(storeInfo.taxRate) / 100);

//Log the final itemized receipt to the console, showing the final list of items, the table fee, subtotal, tax amount, and the grand total.

let grandTotal = grossSubtotal + taxAmount;

console.log("All items:", receiptItems);
console.log("Table Fee:", storeInfo.tableFee);
console.log("Subtotal:", subtotal);
console.log("Tax Amount:", taxAmount);
console.log("Grand Total:", grandTotal);

//Journal Prompt