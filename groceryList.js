let grocery_list = [];
let grocery_list = prompt("Do you want to create a grocery lost? (y/n)")

if (grocery_list === "y") {
  let count = prompt(" How many items to get? ");

  for (let I = 0; i < count; i++) {
    let item = prompt (`Enter item ${i + 1}:`) 
    grocery_list.push(item);
    
