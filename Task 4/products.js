// ============================================
//  TECHSTORE — Product Listing
//  Features: Search, Filter, Sort, Real Images,
//            Improved Price Range Slider
// ============================================

// ===== PRODUCT DATA (24 products) =====
// img: Unsplash/public CDN URLs — consistent, high-quality product shots
const products = [
  // LAPTOPS
  {
    id: 1, name: "Dell XPS 15", category: "laptop", price: 135000,
    rating: 4.8, reviews: 312, badge: "hot",
    img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&q=80",
    desc: "15.6\" OLED, Intel Core i7, 16GB RAM, 512GB SSD. Built for professionals."
  },
  {
    id: 2, name: "MacBook Air M2", category: "laptop", price: 119000,
    rating: 4.9, reviews: 891, badge: "hot",
    img: "https://images.unsplash.com/photo-1611186871525-1b7f1e5a7a2e?w=400&q=80",
    desc: "Apple M2 chip, 8GB unified memory, 256GB SSD. Thin, powerful, silent."
  },
  {
    id: 3, name: "Lenovo ThinkPad X1", category: "laptop", price: 98000,
    rating: 4.6, reviews: 204, badge: null,
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
    desc: "Business-grade 14\" IPS, Core i5, military-grade build quality."
  },
  {
    id: 4, name: "ASUS ROG Zephyrus G14", category: "laptop", price: 155000,
    rating: 4.7, reviews: 178, badge: "new",
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80",
    desc: "RTX 4060, Ryzen 9, 16GB RAM, 1TB SSD, 144Hz display. Gaming powerhouse."
  },
  {
    id: 5, name: "HP Pavilion 15", category: "laptop", price: 54000,
    rating: 4.3, reviews: 567, badge: null,
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80",
    desc: "Everyday laptop — Core i5, 8GB RAM, 512GB SSD. Best budget pick."
  },

  // PHONES
  {
    id: 6, name: "Samsung Galaxy S24", category: "phone", price: 79999,
    rating: 4.7, reviews: 1204, badge: "hot",
    img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80",
    desc: "6.2\" Dynamic AMOLED, Snapdragon 8 Gen 3, 50MP triple camera."
  },
  {
    id: 7, name: "iPhone 15 Pro", category: "phone", price: 134900,
    rating: 4.9, reviews: 2341, badge: "hot",
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80",
    desc: "A17 Pro chip, titanium design, 48MP main camera, Action Button."
  },
  {
    id: 8, name: "OnePlus 12", category: "phone", price: 64999,
    rating: 4.6, reviews: 432, badge: null,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
    desc: "Snapdragon 8 Gen 3, Hasselblad camera, 100W fast charging."
  },
  {
    id: 9, name: "Google Pixel 8a", category: "phone", price: 52999,
    rating: 4.5, reviews: 287, badge: "new",
    img: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80",
    desc: "Tensor G3, 64MP camera, clean Android, 7 years of updates."
  },
  {
    id: 10, name: "Redmi Note 13 Pro", category: "phone", price: 24999,
    rating: 4.4, reviews: 876, badge: null,
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&q=80",
    desc: "200MP camera, AMOLED, 67W charging. Best value in its segment."
  },

  // AUDIO
  {
    id: 11, name: "Sony WH-1000XM5", category: "audio", price: 28990,
    rating: 4.9, reviews: 1567, badge: "hot",
    img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80",
    desc: "Industry-leading ANC, 30hr battery, Hi-Res Audio, multipoint."
  },
  {
    id: 12, name: "Apple AirPods Pro 2", category: "audio", price: 24900,
    rating: 4.8, reviews: 2109, badge: null,
    img: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&q=80",
    desc: "Adaptive Audio, USB-C, H2 chip, 6hr listening + ANC."
  },
  {
    id: 13, name: "JBL Flip 6", category: "audio", price: 8999,
    rating: 4.5, reviews: 734, badge: null,
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
    desc: "IP67 waterproof Bluetooth speaker, 12hr playtime, strong bass."
  },
  {
    id: 14, name: "Bose QuietComfort 45", category: "audio", price: 26900,
    rating: 4.7, reviews: 429, badge: null,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    desc: "World-class noise cancellation, 24hr battery, premium comfort."
  },

  // TABLETS
  {
    id: 15, name: "iPad Pro M4", category: "tablet", price: 99900,
    rating: 4.9, reviews: 543, badge: "new",
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80",
    desc: "Ultra-thin OLED display, M4 chip, Apple Pencil Pro support."
  },
  {
    id: 16, name: "Samsung Galaxy Tab S9", category: "tablet", price: 72999,
    rating: 4.7, reviews: 312, badge: null,
    img: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80",
    desc: "12.4\" AMOLED, Snapdragon 8 Gen 2, IP68, S Pen included."
  },
  {
    id: 17, name: "Lenovo Tab P12", category: "tablet", price: 32999,
    rating: 4.4, reviews: 198, badge: null,
    img: "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=400&q=80",
    desc: "12.7\" LCD, Dimensity, 10200mAh. Best Android tablet under 35K."
  },

  // ACCESSORIES
  {
    id: 18, name: "Logitech MX Master 3S", category: "accessory", price: 9499,
    rating: 4.8, reviews: 891, badge: null,
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
    desc: "8000 DPI, near-silent clicks, multi-device, USB-C charging."
  },
  {
    id: 19, name: "Keychron K2 Keyboard", category: "accessory", price: 7499,
    rating: 4.7, reviews: 432, badge: "new",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80",
    desc: "75% layout, hot-swappable switches, RGB backlight, Mac/Windows."
  },
  {
    id: 20, name: "Anker 65W GaN Charger", category: "accessory", price: 2499,
    rating: 4.6, reviews: 1203, badge: null,
    img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&q=80",
    desc: "3-port GaN, 65W total — charges laptop + phone + tablet at once."
  },
  {
    id: 21, name: "Samsung T7 SSD 1TB", category: "accessory", price: 8999,
    rating: 4.8, reviews: 654, badge: null,
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&q=80",
    desc: "Portable SSD — 1050MB/s read, USB 3.2, fingerprint security."
  },

  // MONITORS
  {
    id: 22, name: "LG 27\" 4K IPS", category: "monitor", price: 34999,
    rating: 4.7, reviews: 287, badge: null,
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80",
    desc: "27\" 4K UHD IPS, 99% sRGB, USB-C 60W delivery, AMD FreeSync."
  },
  {
    id: 23, name: "Samsung Odyssey G5", category: "monitor", price: 28999,
    rating: 4.6, reviews: 412, badge: "hot",
    img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&q=80",
    desc: "27\" 1440p curved, 165Hz, 1ms response, G-Sync compatible."
  },
  {
    id: 24, name: "BenQ PD2706U", category: "monitor", price: 52999,
    rating: 4.8, reviews: 176, badge: "new",
    img: "https://images.unsplash.com/photo-1616763355603-9755a640a287?w=400&q=80",
    desc: "27\" 4K designer panel, 100% sRGB, Thunderbolt 3, HDR400."
  },
];

// ===== DOM ELEMENTS =====
const grid            = document.getElementById('product-grid');
const loadingEl       = document.getElementById('loading');
const noResultsEl     = document.getElementById('no-results');
const resultCountEl   = document.getElementById('result-count');
const productCountEl  = document.getElementById('product-count');
const searchInput     = document.getElementById('search-input');
const clearSearchBtn  = document.getElementById('clear-search');
const categoryFilter  = document.getElementById('category-filter');
const priceFilter     = document.getElementById('price-filter');
const priceLabel      = document.getElementById('price-label');
const sortFilter      = document.getElementById('sort-filter');
const activeFiltersEl = document.getElementById('active-filters');
const rangeFill       = document.getElementById('range-fill');

// ===== UTILITY: format price (Indian locale) =====
function formatPrice(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

// ===== UTILITY: star HTML =====
function renderStars(rating) {
  let html = '';
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  for (let i = 0; i < full; i++) html += '★';
  if (half) html += '½';
  return html;
}

// ===== UTILITY: update slider fill =====
function updateSliderFill() {
  const min    = parseInt(priceFilter.min);
  const max    = parseInt(priceFilter.max);
  const value  = parseInt(priceFilter.value);
  const pct    = ((value - min) / (max - min)) * 100;

  // CSS custom property approach (works on Chrome/Firefox/Edge)
  priceFilter.style.setProperty('--fill', pct + '%');

  // Also update the visual fill bar (fallback)
  if (rangeFill) {
    rangeFill.style.width = pct + '%';
  }
}

// ===== RENDER: product cards =====
function renderCards(data) {
  grid.innerHTML = '';

  if (data.length === 0) {
    noResultsEl.classList.remove('hidden');
    resultCountEl.textContent  = 'No products found';
    productCountEl.textContent = '0';
    return;
  }

  noResultsEl.classList.add('hidden');
  resultCountEl.textContent  = `Showing ${data.length} of ${products.length} products`;
  productCountEl.textContent = data.length;

  data.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${index * 0.04}s`;

    const badgeHTML = product.badge
      ? `<span class="card-badge ${product.badge}">${product.badge.toUpperCase()}</span>`
      : '';

    // Use real image if available, else fall back to emoji
    const imageHTML = product.img
      ? `<img
           class="card-img"
           src="${product.img}"
           alt="${product.name}"
           loading="lazy"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
         />
         <span class="card-emoji" style="display:none">${product.emoji || '📦'}</span>`
      : `<span class="card-emoji">${product.emoji || '📦'}</span>`;

    card.innerHTML = `
      <div class="card-image">
        ${imageHTML}
        ${badgeHTML}
      </div>
      <div class="card-body">
        <div class="card-category">${product.category}</div>
        <div class="card-name">${product.name}</div>
        <div class="card-desc">${product.desc}</div>
        <div class="card-rating">
          <span class="stars">${renderStars(product.rating)}</span>
          <span class="rating-num">${product.rating} (${product.reviews.toLocaleString()} reviews)</span>
        </div>
      </div>
      <div class="card-footer">
        <div class="card-price">
          <span class="currency">₹</span>${product.price.toLocaleString('en-IN')}
        </div>
        <button class="card-btn">
          <i class="fas fa-eye"></i> View
        </button>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ===== RENDER: active filter tags =====
function updateFilterTags() {
  const tags     = [];
  const search   = searchInput.value.trim();
  const category = categoryFilter.value;
  const maxPrice = parseInt(priceFilter.value);
  const sort     = sortFilter.value;

  if (search)             tags.push(`🔍 "${search}"`);
  if (category !== 'all') tags.push(`📁 ${category}`);
  if (maxPrice < 200000)  tags.push(`💰 Max ${formatPrice(maxPrice)}`);
  if (sort !== 'default') tags.push(`↕ ${sortFilter.options[sortFilter.selectedIndex].text}`);

  activeFiltersEl.innerHTML = tags
    .map(t => `<span class="filter-tag">${t}</span>`)
    .join('');
}

// ===== CORE: apply filters + sort =====
function applyFilters() {
  const search   = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const maxPrice = parseInt(priceFilter.value);
  const sort     = sortFilter.value;

  let result = products.filter(p => {
    const matchSearch   = !search ||
      p.name.toLowerCase().includes(search) ||
      p.desc.toLowerCase().includes(search) ||
      p.category.toLowerCase().includes(search);
    const matchCategory = category === 'all' || p.category === category;
    const matchPrice    = p.price <= maxPrice;
    return matchSearch && matchCategory && matchPrice;
  });

  switch (sort) {
    case 'price-asc':   result.sort((a, b) => a.price - b.price); break;
    case 'price-desc':  result.sort((a, b) => b.price - a.price); break;
    case 'rating-desc': result.sort((a, b) => b.rating - a.rating); break;
    case 'name-asc':    result.sort((a, b) => a.name.localeCompare(b.name)); break;
  }

  updateFilterTags();
  renderCards(result);
}

// ===== RESET all filters =====
function resetAll() {
  searchInput.value      = '';
  categoryFilter.value   = 'all';
  priceFilter.value      = 200000;
  priceLabel.textContent = '₹2,00,000';
  sortFilter.value       = 'default';
  clearSearchBtn.classList.remove('visible');
  updateSliderFill();
  applyFilters();
}

// ===== EVENT LISTENERS =====
searchInput.addEventListener('input', () => {
  clearSearchBtn.classList.toggle('visible', searchInput.value.length > 0);
  applyFilters();
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  clearSearchBtn.classList.remove('visible');
  searchInput.focus();
  applyFilters();
});

categoryFilter.addEventListener('change', applyFilters);
sortFilter.addEventListener('change', applyFilters);

priceFilter.addEventListener('input', () => {
  const value = parseInt(priceFilter.value);
  priceLabel.textContent = formatPrice(value);
  updateSliderFill();
  applyFilters();
});

document.getElementById('reset-btn').addEventListener('click', resetAll);

// ===== INIT =====
function init() {
  loadingEl.classList.remove('hidden');
  grid.innerHTML = '';
  noResultsEl.classList.add('hidden');

  // Set initial slider fill
  updateSliderFill();

  setTimeout(() => {
    loadingEl.classList.add('hidden');
    productCountEl.textContent = products.length;
    applyFilters();
  }, 700);
}

init();
