// Find Grocery items in the array
// qty represent grams
const vegetableList = [
  { vegName: "Carrot", qty: 250 },
  { vegName: "Beans", qty: 100 },
  { vegName: "Cabeage", qty: 600 },
  { vegName: "Ladies Finger", qty: 500 },
  { vegName: "Mango", qty: 1000 },
  { vegName: "Onion", qty: 1500 },
  { vegName: "Tomato", qty: 1000 },
  { vegName: "Potato", qty: 2000 },
  { vegName: "Beetroot", qty: 750 },
];
// Find the vegetable present or not in the bugget
let checkedVeg = vegetableList.find(function (vegetableList) {
    return vegetableList.vegName === "Onion";
})
console.log("Yes, ", checkedVeg);
console.log("Yes, ", checkedVeg.vegName);
// Find the index present in basket
// Find item  Potato
let findVeg = vegetableList.findIndex(function(vegetableList){
    return vegetableList.vegName === "Potato";
})
console.log("Index No is ", findVeg);
console.log("Position No is ", findVeg+1);
// How many quantity to buy beetroot
let buyQty = vegetableList.find(function(vegetableList){
    return vegetableList.vegName === "Beetroot";
})

console.log("Beetroot buying KG is",buyQty.qty,"grams");
