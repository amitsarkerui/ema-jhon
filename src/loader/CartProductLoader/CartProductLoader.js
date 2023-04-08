import { getShoppingCart } from "../../utilities/fakedb";

const cartProductLoader = async () => {
  const loadedProduct = await fetch("products.json");
  const products = await loadedProduct.json();
  console.log(products);

  const storedCart = getShoppingCart();
  // console.log(storedCart);
  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    // console.log("-------->13", addedProduct);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      // console.log("-------->17", addedProduct);
      savedCart.push(addedProduct);
    }
  }
  return savedCart;
};
export default cartProductLoader;
