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