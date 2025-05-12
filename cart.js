let cart = [];

function toggleCart() {
  document.getElementById('cartPanel').classList.toggle('active');
  renderCart();
}

function addToCart(product) {
  const found = cart.find(item => item.name === product.name);
  if (found) {
    found.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
}

function updateQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const shippingMsg = document.getElementById("shipping-message");
  const progressBar = document.getElementById("progress-bar-inner");

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-info">
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <div class="quantity-controls">
          <button onclick="updateQuantity(${index}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity(${index}, 1)">+</button>
        </div>
      </div>
      <div>$${(item.price * item.quantity).toFixed(2)}</div>
    `;
    container.appendChild(itemEl);
    total += item.price * item.quantity;
  });

  totalEl.textContent = `$${total.toFixed(2)}`;
  const freeShippingMin = 500;
  const percentage = Math.min(100, (total / freeShippingMin) * 100);
  progressBar.style.width = percentage + "%";
  shippingMsg.textContent = total >= freeShippingMin
    ? "You have qualified for free shipping!"
    : `Spend $${(freeShippingMin - total).toFixed(2)} more for free shipping!`;
}
