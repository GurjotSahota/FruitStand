/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
const products = [
  {
    name: "Cherry",
    price: 2.5,
    quantity: 0,
    productId: 1,
    image: "images/cherry.jpg"
  },
  {
    name: "Orange",
    price: 1.5,
    quantity: 0,
    productId: 2,
    image: "images/orange.jpg"
  },
  {
  name: "Strawberry",
  price: 3,
  quantity: 0,
  productId: 3,
  image: "images/strawberry.jpg"
  },
];

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  const product = products.find(p => p.productId === productId);
  if (product) {
    const cartItem = cart.find(c => c.productId === productId);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  }
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  const cartItem = cart.find(c => c.productId === productId);
  if (cartItem) {
    cartItem.quantity++;
  }
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  const cartItem = cart.find(c => c.productId === productId);
  if (cartItem) {
    cartItem.quantity--;
    if (cartItem.quantity === 0) {
      removeProductFromCart(productId);
    }
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  const index = cart.findIndex(c => c.productId === productId);
  if (index !== -1) {
    cart.splice(index, 1);
  }
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart.length = 0;
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount) {
  const total = cartTotal();
  return amount - total;
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/
//Function to display cart ttoal in the selected currency
function dispayCartTotal(){
  return formatCurrency(cartTotal());
}

//Function to display cart items with prices in the selected currency
function displayCartItems() {
  return cart.map(item => ({
    name: item.name,
    quantity: item.quantity,
    price: formatCurrency(item.price * item.quantity)
  }));
}

//Function to add new product
function addNewProduct(name, price, image) {
  const newProductId = products.length ? products[products.length - 1].productId + 1 : 1;
  product.push({
    name,
    price,
    quantity: 0,
    productId: newProductId,
    image
  });
}


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}