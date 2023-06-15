import cart from "./components/cart.js";
import getProducts from "./components/helpers/getProducts.js";
import loader  from "./components/loader.js";
import products from "./components/products.js";
import showCart from "./components/showCart.js";
import showMenuloader  from "./components/showMenu.js";

// UI Elements

// Hidden Loader
loader()

// Show menu
showMenuloader()

// Show Cart
showCart()

/* End UI Elements */

/* Products */
const { db, printProducts } = products(await getProducts())

/* Cart */
cart(db, printProducts)