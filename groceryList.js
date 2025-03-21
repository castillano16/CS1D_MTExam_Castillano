let grocery_list = [];
let grocery_list = prompt("Do you want to create a grocery list? (y/n)")

if (grocery_list === "y") {
  let count = prompt(" How many items to get? ");

  for (let I = 0; i < count; i++) {
    let item = prompt (`Enter item ${i + 1}:`) 
    grocery_list.(item);
  }
  
let grocery_list_sorted = grocery_list.sort() ;
let grocery_list_reverse = grocery_list.reverse() ;
} else {
  alert(" Create a grocery list.");
}    
