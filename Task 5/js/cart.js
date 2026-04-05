// ===========================
// cart.js — Cart Page Logic
// ===========================

// --- Helpers ---
function getCart() {
  return JSON.parse(localStorage.getItem('shopease_cart') || '[]');
}
function saveCart(cart) {
  localStorage.setItem('shopease_cart', JSON.stringify(cart));
}

function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = `toast show ${type}`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.className = 'toast';
  }, 2500);
}

function updateCartBadge() {
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) badge.textContent = count;
}

// --- Render Cart ---
function renderCart() {
  const cart      = getCart();
  const container = document.getElementById('cart-items-container');
  const emptyEl   = document.getElementById('empty-cart');
  const summaryEl = document.getElementById('cart-summary');
  const countEl   = document.getElementById('cart-item-count');

  container.innerHTML = '';
  updateCartBadge();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  countEl.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;

  if (cart.length === 0) {
    emptyEl.classList.remove('hidden');
    summaryEl.classList.add('hidden');
    return;
  }

  emptyEl.classList.add('hidden');
  summaryEl.classList.remove('hidden');

  cart.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.style.animationDelay = `${index * 0.05}s`;

    el.innerHTML = `
      <img
        class="cart-item-img"
        src="${item.image}"
        alt="${item.name}"
        loading="lazy"
        onerror="this.src='https://via.placeholder.com/100x80/1e1e1e/888?text=Img'"
      />
      <div class="cart-item-info">
        <span class="cart-item-category">${item.category}</span>
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</p>
      </div>
      <div class="cart-item-actions">
        <div class="qty-control">
          <button class="qty-btn" data-action="dec" data-id="${item.id}" aria-label="Decrease quantity">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-action="inc" data-id="${item.id}" aria-label="Increase quantity">+</button>
        </div>
        <button class="btn-remove" data-id="${item.id}" aria-label="Remove ${item.name}">Remove</button>
      </div>
    `;

    container.appendChild(el);
  });

  // Qty buttons
  container.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id     = parseInt(btn.dataset.id);
      const action = btn.dataset.action;
      updateQty(id, action);
    });
  });

  // Remove buttons
  container.querySelectorAll('.btn-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      removeItem(parseInt(btn.dataset.id));
    });
  });

  renderSummary(cart);
}

// --- Update Quantity ---
function updateQty(id, action) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;

  if (action === 'inc') {
    item.qty += 1;
  } else if (action === 'dec') {
    item.qty -= 1;
    if (item.qty <= 0) {
      removeItem(id);
      return;
    }
  }

  saveCart(cart);
  renderCart();
}

// --- Remove Item ---
function removeItem(id) {
  let cart = getCart();
  const item = cart.find(i => i.id === id);
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  if (item) showToast(`${item.name} removed from cart`, 'error');
  renderCart();
}

// --- Render Summary ---
function renderSummary(cart) {
  const subtotal  = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery  = subtotal >= 999 ? 0 : 99;
  const discount  = Math.round(subtotal * 0.10);
  const total     = subtotal + delivery - discount;

  document.getElementById('summary-subtotal').textContent  = `₹${subtotal.toLocaleString('en-IN')}`;
  document.getElementById('summary-delivery').textContent  = delivery === 0 ? 'FREE' : `₹${delivery}`;
  document.getElementById('summary-discount').textContent  = `- ₹${discount.toLocaleString('en-IN')}`;
  document.getElementById('summary-total').textContent     = `₹${total.toLocaleString('en-IN')}`;
}

// --- Checkout Button ---
document.getElementById('checkout-btn').addEventListener('click', () => {
  const cart = getCart();
  if (cart.length === 0) return;

  showToast('🎉 Order placed successfully! (Demo)', 'success');
  setTimeout(() => {
    localStorage.removeItem('shopease_cart');
    renderCart();
  }, 1500);
});

// --- Init ---
renderCart();
