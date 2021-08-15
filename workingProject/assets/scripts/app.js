/* This a very simple dummy shop, a list of products where we can click an 
Add to Cart button which will then increment the total amount in a shopping cart
*/
//all classes should be defined before excuting any code that use them
//the order of classes doesn't matter between classes
/*
-static properties and methods are only accessible on the class itself ,
you don't need to use the new keyword to create an object based on that class

*/
/* 
inheritance:to conveniently share code amongst classes
-we notice that each class has a render method , 
in each one of them , we create the element , then we add stuff to that element , and then we returnthe element

-when it comes to constructors there is a couple of rules:
  if your subclass doesn't have a constructor ,the constructor 
  of a parent class is automatically called

  if your subclass has a constructor , it will be called , and the parent class 
  constructor will not be called


  here in this example we want to call the subclass constructor and from there
  call the parent constructor , we use this using 'super()' keyword

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
//attributes is an array full of objects creates based on the class in the next line
class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}
//you can inherit from one class only in javascript

class ShoppingCart extends Component {
  items = [];
  //i expect 'value' to be an array of cart items

  set cartItems(value) {
    this.items = value; //overwriting the existing array with a new one
    //we added the next line , so whenever we set a new cart items , i recalculate the total amount and update the html code
    this.totalOutput.innerHTML = `<h2>Total : \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((prevValue, currItem) => {
      return prevValue + currItem.price;
    }, 0);
    return sum;
  }
  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
    <h2>Total : \$${0}</h2>
    <button>Order Now!</button>
    `;

    this.totalOutput = cartEl.querySelector("h2");
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

    this.cart = new ShoppingCart("app");
    this.cart.render();

    const productList = new ProductList();
    const prodListEl = productList.render();

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
