// Product data (like app/page.tsx)
const products = [
  { id: 1, name: "Laptop", price: 999.99, category: "electronics" },
  { id: 2, name: "Headphones", price: 199.99, category: "electronics" },
  { id: 3, name: "T-Shirt", price: 29.99, category: "clothing" },
  { id: 4, name: "Jeans", price: 59.99, category: "clothing" },
];

const categorySelect = document.getElementById("categorySelect");
const sortSelect = document.getElementById("sortSelect");
const productGrid = document.getElementById("productGrid");

function renderProducts(list) {
  productGrid.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "bg-white border rounded-xl p-5";

    card.innerHTML = `
      <h2 class="text-2xl font-bold">${product.name}</h2>
      <p class="text-lg mt-2">$${product.price.toFixed(2)}</p>
      <span class="inline-block mt-3 px-3 py-1 text-sm rounded-full
        ${product.category === "electronics" ? "bg-blue-200" : "bg-green-200"}">
        ${product.category}
      </span>
    `;

    productGrid.appendChild(card);
  });
}

function updateProducts() {
  let updated = [...products];

  if (categorySelect.value !== "all") {
    updated = updated.filter(
      p => p.category === categorySelect.value
    );
  }

  if (sortSelect.value === "low-high") {
    updated.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "high-low") {
    updated.sort((a, b) => b.price - a.price);
  }

  renderProducts(updated);
}

categorySelect.addEventListener("change", updateProducts);
sortSelect.addEventListener("change", updateProducts);

renderProducts(products);