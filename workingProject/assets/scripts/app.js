/* This a very simple dummy shop, a list of products where we can click an 
Add to Cart button which will then increment the total amount in a shopping cart
*/
//all classes should be defined before excuting any code that use them
//the order of classes doesn't matter between classes

class Product {
  //a method which javascript automatically calls when we create a new instance of this class
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}
//this class is responsible for rendering a single item
class ProductItem {
  constructor(product) {
    this.product = product;
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
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();

      prodList.append(prodEl);
    }

    renderHook.append(prodList);
  }
}

const productList = new ProductList();

productList.render();
