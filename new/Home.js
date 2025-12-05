// Update year
document.getElementById("year").textContent = new Date().getFullYear();

// Profile dropdown
const profileBtn = document.querySelector(".profile");
const menu = document.getElementById("profileMenu");
profileBtn.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});
window.addEventListener("click", (e) => {
  if (!profileBtn.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

// Mobile nav toggle
const mobileToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".nav");
mobileToggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.flexDirection = "column";
});

// Optional: Close nav on link click (for mobile)
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    if(window.innerWidth <= 720) nav.style.display = "none";
  });
});







// HTML elements
const cartBtn = document.getElementById("openCart");
const cartDropdown = document.getElementById("cartDropdown");
const cartCount = document.querySelector(".cart-count");
const cartItemsList = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");

// Toggle cart dropdown
cartBtn.addEventListener("click", () => {
  cartDropdown.style.display =
    cartDropdown.style.display === "block" ? "none" : "block";
});

// Add item to cart
document.querySelectorAll(".add-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    const product = {
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: Number(btn.dataset.price)
    };

    cart.push(product);
    updateCartUI();
  });
});

// Update cart UI
function updateCartUI() {
  cartItemsList.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    total += item.price;

    const li = document.createElement("li");
    li.textContent = `${item.name} — $${item.price}`;
    cartItemsList.appendChild(li);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = `Total: $${total}`;
}

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!cartBtn.contains(e.target) && !cartDropdown.contains(e.target)) {
    cartDropdown.style.display = "none";
  }
});


/* --- End of Home.js --- */