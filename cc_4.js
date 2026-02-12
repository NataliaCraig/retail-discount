// product array
const products = [
  {
    name: "Stickers",
    category: "Accessories",
    price: 3.99,
    inventory: 20,
  },
  {
    name: "Bracelets",
    category: "Accessories",
    price: 8.99,
    inventory: 40
  },
  {
    name: "Sunscreen",
    category: "Skincare",
    price: 16.99,
    inventory: 15
  },
  {
    name: "Perfume",
    category: "Fragrance",
    price: 30.00,
    inventory: 20
},
{
    name: "Lotion",
    category: "Skincare",
    price: 20.99,
    inventory: 12
}
];
// apply dynamic discount 
for (const product of products) {

  let discount = 0;

  //switch statements for categories
  switch (product.category) {

    case "Accessories":
      discount = 0.15;
      break;

    case "Skincare":
      discount = 0.10;
      break;

    case "Fragrance":
      discount = 0.20;
      break;

    default:
      discount = 0;
  }

  product.price = product.price - (product.price * discount);

  console.log(`${product.name}: $${product.price.toFixed(2)}`);

}

if (customerType === "student") {extraDiscount = 0.05;}
  
  else if (customerType === "senior")
  {extraDiscount = 0.07;}
 else if (customerType === "veteran") {extraDiscount = 0.10;}
   else if (customerType === "local") {extraDiscount = 0.08;}
  else {
  extraDiscount = 0;}
  
  //checkout process (3 customers)
  for (let i = 1; i <= 3; i++) {
    let total = 0;

  console.log("Processing Customer " + i);
   for (let product of products) {

    if (product.inventory > 0) {

      total += product.price;
      product.inventory--;

    }
  }
  total = total - (total * extraDiscount);

  console.log("Customer " + i + " Total: $" + total.toFixed(2));
}
  
// add for in
console.log("\nStep 6: Logging one product using for...in");

let singleProduct = products[0];