
/**
 * This function calculates the total Price of new Order
 * @param {Array} products  cartProducts:Array of Objects
 * @returns {number} Total Price
 */
export function totalPrice(products) {
  let sum = 0;
  products.forEach((product) => {
    sum += product.price;
  });
  return sum;
}
