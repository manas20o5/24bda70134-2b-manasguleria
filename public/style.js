const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    category: "electronics",
  },
  {
    id: 2,
    name: "Cotton T-Shirt",
    price: 24.99,
    category: "clothing",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 89.99,
    category: "electronics",
  },
  {
    id: 4,
    name: "Denim Jeans",
    price: 59.99,
    category: "clothing",
  },
];

const categorySelect = document.getElementById("categorySelect");
const productGrid = document.getElementById("productGrid");

function renderProducts(list) {
  productGrid.innerHTML = "";

  list.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <h2 class="text-2xl font-bold mb-2">${product.name}</h2>
      <p class="text-xl font-semibold mb-3">$${product.price}</p>
      <span class="category-badge ${product.category}">
        ${product.category}
      </span>
    `;

    productGrid.appendChild(card);
  });
}

function updateProducts() {
  let filtered = [...products];

  if (categorySelect.value !== "all") {
    filtered = filtered.filter(
      (p) => p.category === categorySelect.value
    );
  }

  renderProducts(filtered);
}

categorySelect.addEventListener("change", updateProducts);

// Initial render
renderProducts(products);
