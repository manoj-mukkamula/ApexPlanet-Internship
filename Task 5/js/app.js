// ===========================
// app.js — Index Page Logic
// ===========================

const FALLBACK_IMG = "https://placehold.co/400x300/1e1e1e/888?text=No+Image";

// --- Helpers ---
function getCart() {
  return JSON.parse(localStorage.getItem('shopease_cart') || '[]');
}
function saveCart(cart) {
  localStorage.setItem('shopease_cart', JSON.stringify(cart));
}
function isInCart(id) {
  return getCart().some(item => item.id === id);
}

function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = `toast show ${type}`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.className = 'toast'; }, 2500);
}

function updateCartBadge() {
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) badge.textContent = count;
}

function generateStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function getDiscount(price, originalPrice) {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

// ===========================
// PRODUCT MODAL
// ===========================
function openModal(product) {
  const overlay = document.getElementById('product-modal');
  const inCart  = isInCart(product.id);
  const disc    = getDiscount(product.price, product.originalPrice);

  overlay.querySelector('.modal-img-wrap img').src = product.image;
  overlay.querySelector('.modal-img-wrap img').alt = product.name;
  overlay.querySelector('.modal-category').textContent = product.category;
  overlay.querySelector('.modal-name').textContent = product.name;
  overlay.querySelector('.modal-rating .stars').textContent = generateStars(product.rating);
  overlay.querySelector('.modal-rating .rating-count').textContent = `(${product.reviews} reviews)`;
  overlay.querySelector('.modal-price').textContent = `₹${product.price.toLocaleString('en-IN')}`;
  overlay.querySelector('.modal-original-price').textContent = `₹${product.originalPrice.toLocaleString('en-IN')}`;
  overlay.querySelector('.modal-discount-badge').textContent = `${disc}% off`;
  overlay.querySelector('.modal-description').textContent = product.description;

  const cartBtn = overlay.querySelector('.modal-btn-cart');
  cartBtn.textContent = inCart ? '✓ Already in Cart' : '+ Add to Cart';
  cartBtn.className   = `modal-btn-cart ${inCart ? 'in-cart' : ''}`;

  // Remove previous listener cleanly
  const newBtn = cartBtn.cloneNode(true);
  cartBtn.parentNode.replaceChild(newBtn, cartBtn);
  newBtn.addEventListener('click', () => {
    handleAddToCart(product, null);
    newBtn.textContent = '✓ Already in Cart';
    newBtn.classList.add('in-cart');
    // Also update the product card button on the grid
    const cardBtn = document.querySelector(`.btn-add-cart[data-id="${product.id}"]`);
    if (cardBtn) {
      cardBtn.textContent = '✓ In Cart';
      cardBtn.classList.add('in-cart');
    }
  });

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('product-modal');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Close on overlay click (outside modal box)
document.getElementById('product-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

document.getElementById('modal-close-btn').addEventListener('click', closeModal);

// ===========================
// RENDER PRODUCTS
// ===========================
function renderProducts(list) {
  const grid     = document.getElementById('product-grid');
  const noResults= document.getElementById('no-results');
  const countEl  = document.getElementById('result-count');

  grid.innerHTML = '';
  countEl.textContent = `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;

  if (list.length === 0) {
    noResults.classList.remove('hidden');
    return;
  }
  noResults.classList.add('hidden');

  list.forEach((product, i) => {
    const inCart = isInCart(product.id);
    const disc   = getDiscount(product.price, product.originalPrice);
    const card   = document.createElement('article');
    card.className = 'product-card';
    card.style.animationDelay = `${i * 0.04}s`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View details for ${product.name}`);

    card.innerHTML = `
      <div class="product-img-wrap">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='${FALLBACK_IMG}'"
        />
        <span class="product-category-tag">${product.category}</span>
        <span class="product-discount-tag">-${disc}%</span>
      </div>
      <div class="product-body">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          <span class="stars">${generateStars(product.rating)}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-price">
          ₹${product.price.toLocaleString('en-IN')}
          <span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
        </div>
        <button
          class="btn-add-cart ${inCart ? 'in-cart' : ''}"
          data-id="${product.id}"
          aria-label="${inCart ? 'Already in cart' : 'Add ' + product.name + ' to cart'}"
        >
          ${inCart ? '✓ In Cart' : '+ Add to Cart'}
        </button>
      </div>
    `;

    // Click card body (not cart button) → open modal
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.btn-add-cart')) {
        openModal(product);
      }
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.target.closest('.btn-add-cart')) openModal(product);
    });

    // Cart button
    card.querySelector('.btn-add-cart').addEventListener('click', (e) => {
      e.stopPropagation();
      handleAddToCart(product, e.currentTarget);
    });

    grid.appendChild(card);
  });
}

// ===========================
// ADD TO CART
// ===========================
function handleAddToCart(product, btn) {
  const cart     = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += 1;
    showToast(`${product.name} qty updated`, 'info');
  } else {
    cart.push({ ...product, qty: 1 });
    if (btn) {
      btn.textContent = '✓ In Cart';
      btn.classList.add('in-cart');
    }
    showToast(`${product.name} added to cart!`, 'success');
  }

  saveCart(cart);
  updateCartBadge();
}

// ===========================
// FILTER & SORT
// ===========================
let debounceTimer;

function getFilteredSortedProducts() {
  const search   = document.getElementById('search-input').value.trim().toLowerCase();
  const category = document.getElementById('category-filter').value;
  const maxPrice = parseInt(document.getElementById('price-filter').value);
  const sort     = document.getElementById('sort-select').value;

  let list = PRODUCTS.filter(p => {
    const matchSearch   = p.name.toLowerCase().includes(search) || p.category.includes(search);
    const matchCategory = category === 'all' || p.category === category;
    const matchPrice    = p.price <= maxPrice;
    return matchSearch && matchCategory && matchPrice;
  });

  switch (sort) {
    case 'price-asc':   list.sort((a, b) => a.price - b.price);            break;
    case 'price-desc':  list.sort((a, b) => b.price - a.price);            break;
    case 'rating-desc': list.sort((a, b) => b.rating - a.rating);          break;
    case 'name-asc':    list.sort((a, b) => a.name.localeCompare(b.name)); break;
    default: break;
  }

  return list;
}

function applyFilters() {
  renderProducts(getFilteredSortedProducts());
}

function clearFilters() {
  document.getElementById('search-input').value = '';
  document.getElementById('category-filter').value = 'all';
  document.getElementById('price-filter').value = 5000;
  document.getElementById('price-display').textContent = '5000';
  document.getElementById('sort-select').value = 'default';
  applyFilters();
}

// --- Event Listeners ---
document.getElementById('search-input').addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(applyFilters, 300);
});
document.getElementById('category-filter').addEventListener('change', applyFilters);
document.getElementById('price-filter').addEventListener('input', function () {
  document.getElementById('price-display').textContent = this.value;
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(applyFilters, 200);
});
document.getElementById('sort-select').addEventListener('change', applyFilters);
document.getElementById('clear-filters').addEventListener('click', clearFilters);

// --- Init ---
updateCartBadge();
applyFilters();
