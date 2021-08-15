/* This a very simple dummy shop, a list of products where we can click an 
Add to Cart button which will then increment the total amount in a shopping cart
*/

class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;
}

console.log(new Product());

const productList = {
  products: [
    {
      title: "A pillow",
      imageUrl: "",
      price: 19.99,
      decription: "A soft pillow",
    },
    {
      title: "A carpet",
      imageUrl: "",
      price: 89.99,
      decription: "A carpet which you might like or not",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
            <div>
                <img src="${prod.imageUrl}" alt="${prod.title}"> 
            </div>
            <div class='product-item__content'>
              <h2>${prod.title}</h2>
              <h3>${prod.price}</h3>
              <p>${prod.decription}</p>
              <button>Add to Cart</button>            
            </div>
            `;
      prodList.append(prodEl);
    }

    renderHook.append(prodList);
  },
};

productList.render();
