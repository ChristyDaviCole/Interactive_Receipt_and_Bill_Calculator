Journal Prompt 1: Instead of putting all the store details into a single storeInfo object, you could have saved each detail in its own standalone global variable. What are the advantages of grouping related data into an object versus managing separate variables?
You can access all of the information about the store in one place with one object rather than having to reference several different variables. It's like keeping one file on the object rather than multiple ones.

Journal Prompt 2: What happens if you set a value to a property of an object that didn’t exist before? How does that effect the ways that you can create and set object properties?
JS will let you add the property even if it wasn't there before, which is useful because objects can start off empty and be built as the programs goes along.

Journal Prompt 3: Reflect on using the for...of loop to move through your list. How did you target and pull out just the price property from each item object inside the loop?
I accessed each item's price using dot notation: item.price -- which targets the item and retrieves the price stored in the object's price property.

Journal Prompt 4: Reflect on how using .pop() affected your data. How did removing an item from the array automatically change your final calculations when you ran the total logic?
.pop() removed the last element from my receiptItems array & returned the removed element.Recalculation was necessary to count only the remaining items.