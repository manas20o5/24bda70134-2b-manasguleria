const products = [
  { name: "Wireless Headphones", price: 129.99, category: "electronics" },
  { name: "Cotton T-Shirt", price: 24.99, category: "clothing" },
  { name: "Bluetooth Speaker", price: 89.99, category: "electronics" },
  { name: "Denim Jeans", price: 59.99, category: "clothing" }
];

const productList = document.getElementById("productList");
const filter = document.getElementById("categoryFilter");

function displayProducts(items) {
  productList.innerHTML = "";

  items.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2>${p.name}</h2>
      <div class="price">$${p.price}</div>
      <span class="tag ${p.category}">${p.category}</span>
    `;

    productList.appendChild(card);
  });
}

filter.addEventListener("change", () => {
  const value = filter.value;

  if (value === "all") {
    displayProducts(products);
  } else {
    displayProducts(products.filter(p => p.category === value));
  }
});

displayProducts(products);
