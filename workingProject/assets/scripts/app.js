/* This a very simple dummy shop, a list of products where we can click an 
Add to Cart button which will then increment the total amount in a shopping cart
*/
//all classes should be defined before excuting any code that use them
//the order of classes doesn't matter between classes
/*
-static properties and methods are only accessible on the class itself ,
you don't need to use the new keyword to create an object based on that class

*/

class Product {
  //a method which javascript automatically calls when we create a new instance of this class
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total : \$${1}</h2>`;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
    <h2>Total : \$${0}</h2>
    <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

//this class is responsible for rendering a single item
class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
          <div>
              <img src="${this.product.imageUrl}" alt="${this.product.title}"> 
          </div>
          <div class='product-item__content'>
            <h2>${this.product.title}</h2>
            <h3>${this.product.price}</h3>
            <p>${this.product.decription}</p>
            <button>Add to Cart</button>            
          </div>
          `;
    const addCartButton = prodEl.querySelector("button");
    //here we bind 'this' as the browser in the event listener case , will bind 'this' to the dom object that triggered the event , in this case , the button
    //by binding 'this' keyword in the next line , 'this' refers to the object 'productItem' , then in the add to cart method , 'this' keyword will refer to the same object
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product("A pillow", "", "a soft pillow", 19.99),
    new Product("A carpet", "", "A carpet which you might like or not", 89.99),
  ];
  constructor() {}
  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();

      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();

    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}
//we use this class as a communication interface between classes
class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}
App.init(); //we operate directly on that class not on an instance of the class
