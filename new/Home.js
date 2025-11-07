// --- Search Bar Auto-Focus ---
const searchCheckbox = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar");

searchCheckbox.addEventListener("change", () => {
  if (searchCheckbox.checked) {
    searchBar.focus();
  }
});

// --- Category Filter ---
const categories = ["All", "Root", "Leafy", "Fruit"];
const categoryList = document.getElementById("category-list");
const products = document.querySelectorAll("#product-grid .product-card");

// Create category buttons
categories.forEach(cat => {
  const btn = document.createElement("button");
  btn.textContent = cat;
  if(cat === "All") btn.classList.add("active");

  btn.addEventListener("click", () => {
    document.querySelectorAll(".category-list button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filterProducts();
  });

  categoryList.appendChild(btn);
});

// --- Live Search ---
searchBar.addEventListener("input", filterProducts);

// --- Combined Filter Function ---
function filterProducts() {
  const searchValue = searchBar.value.toLowerCase();
  const activeCategory = document.querySelector(".category-list button.active")?.textContent || "All";

  products.forEach(p => {
    const matchCategory = (activeCategory === "All" || p.dataset.category.toLowerCase() === activeCategory.toLowerCase());
    const matchSearch = p.querySelector("h3").textContent.toLowerCase().includes(searchValue);
    p.style.display = matchCategory && matchSearch ? "block" : "none";
  });
}
