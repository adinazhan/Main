const products = [
  {
    stuffName: "Wireless Headphones",
    price: 59.99,
    quantity: 120,
  },
  {
    stuffName: "Gaming Mouse",
    price: 34.99,
    quantity: 75,
  },
  {
    stuffName: "Smartphone",
    price: 799.0,
    quantity: 50,
  },
  {
    stuffName: "Laptop",
    price: 1200.0,
    quantity: 30,
  },
  {
    stuffName: "Smartwatch",
    price: 199.99,
    quantity: 90,
  },
  {
    stuffName: "Bluetooth Speaker",
    price: 49.99,
    quantity: 150,
  },
  {
    stuffName: "External Hard Drive",
    price: 89.99,
    quantity: 10,
  },
];

class Product {
  constructor(stuffName, price, quantity) {
    this.stuffName = stuffName;
    this.price = price;
    this.quantity = quantity;
  }
  sell() {
    if (this.quantity > 0) {
      this.quantity -= 1;
    }
  }
  store(count) {
    this.quantity += count;
  }
}

const shopping = [
  new Product("Wireless Headphones", 59.99, 120),
  new Product("Gaming Mouse", 34.99, 75),
  new Product("Smartphone", 799.0, 50),
  new Product("Laptop", 1200.0, 30),
  new Product("Smartwatch", 199.99, 90),
  new Product("Bluetooth Speaker", 49.99, 150),
  new Product("External Hard Drive", 89.99, 10),
];
console.log(shopping);

const mainPage = document.querySelector(".products");
products.forEach((items, index) => {
  const addDivs = document.createElement("div");
  addDivs.className = "product";
  addDivs.innerHTML = `
   <div class="product__stuffName">${items.stuffName}</div>
   <div class="product__price">${items.price} CZK</div>
    <div class="product__quantity">${items.quantity} in stock</div>
    <button class="btn-buy">Buy</button>
  `;
  const myButton = addDivs.querySelector(".btn-buy");
  myButton.addEventListener("click", () => {
    shopping[index].sell();
    addDivs.querySelector(
      ".product__quantity"
    ).textContent = `${shopping[index].quantity} in stock`;
  });
  mainPage.appendChild(addDivs);
});
