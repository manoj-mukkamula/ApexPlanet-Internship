# 🛒 ShopEase - E-Commerce Web Application

> **ApexPlanet Web Development Internship - Task 5: Final Project and Optimization**

ShopEase is a fully functional e-commerce frontend built using only **HTML, CSS, and Vanilla JavaScript** - no frameworks, no backend. It was developed as the capstone submission for a 45-day web development internship at ApexPlanet Software Pvt. Ltd.

---

## 🔗 Live Demo

**[View Live →](https://manoj-mukkamula.github.io/ApexPlanet-Internship/Task%205/)**

---

## ✅ Task 5 Requirements Fulfilled

| Requirement | Implementation |
|---|---|
| Full Web Application | Product listing, cart, filters, modal, localStorage |
| Performance Optimization | Lazy loading images, debounced search, no unnecessary re-renders |
| Cross-Browser Compatibility | Tested on Chrome, Firefox, Safari, and mobile browsers |

---

## 🚀 Features

### 🏠 Product Listing Page (`index.html`)
- 24 products across 5 categories - Electronics, Clothing, Footwear, Accessories, Home & Living
- **Live search** with 300ms debounce for performance
- **Category filter** dropdown
- **Price range slider** with live label update
- **Sort options** - Price Low→High, Price High→Low, Top Rated, Name A→Z
- **Product Details Modal** - click any product card to view full details (image, description, price, rating, discount %)
- **Add to Cart** with "In Cart" state that persists across page reload
- Toast notifications for user feedback
- Animated product cards with fade-up on load
- "No results found" state with reset button
- Fully responsive grid layout

### 🛒 Cart Page (`cart.html`)
- View all cart items with product image, name, category, price
- **Quantity control** (+/−) - min qty removes item automatically
- **Remove item** button per product
- **Order Summary** - Subtotal, Delivery (free above ₹999), 10% discount, Final Total
- **Proceed to Checkout** - demo confirmation + cart clear
- Empty cart state with "Continue Shopping" link
- Cart badge in navbar updated in real-time
- **Footer always at bottom** (even with empty cart)

### ℹ️ About Page (`about.html`)
- Project overview, tech stack, features grid
- Developer info with LinkedIn and GitHub links
- Contact section

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic structure, accessibility attributes |
| CSS3 | Custom properties, Flexbox, CSS Grid, animations, media queries |
| Vanilla JavaScript | DOM manipulation, localStorage, event handling, debounce |
| Google Fonts | Syne (headings) + DM Sans (body) |
| Unsplash CDN | Product images (no download required) |

---

## 📁 File Structure

```
Task 5/
├── index.html          ← Product listing page (main entry)
├── cart.html           ← Shopping cart page
├── about.html          ← About & contact page
├── css/
│    └── style.css      ← All styles (dark theme, responsive)
├── js/
│    ├── products.js    ← Product data (24 items with descriptions)
│    ├── app.js         ← Index page logic (filters, modal, cart add)
│    └── cart.js        ← Cart page logic (CRUD, summary, checkout)
└── assets/             ← (Reserved for local images)
```

---


## 🏃 How to Run

**Locally:**
1. Clone or download this repository
2. Open `Task 5/index.html` in any modern browser
3. No server, build tools, or dependencies needed

**On GitHub Pages:**
1. Push to GitHub
2. Go to repo Settings → Pages → Source: `main` branch
3. Access at: `https://<your-username>.github.io/<repo-name>/Task%205/`

---

## 🔧 Performance Optimizations Applied

- `loading="lazy"` on all product and cart images
- Debounced search input (300ms) - avoids filtering on every keystroke
- `onerror` fallback on all images - no console errors from broken URLs
- CSS animations only on visible elements
- Single `localStorage` read/write per action - no redundant calls
- Responsive breakpoints at 480px, 768px, 1024px

---

## 🌐 Cross-Browser Compatibility

- CSS custom properties with safe fallbacks
- `-webkit-` prefixes for range input thumb
- `backdrop-filter` gracefully degrades on older browsers
- Tested on Chrome, Firefox, Safari (desktop + mobile)

---

## 👤 Author

**Mukkamula Manoj**
Web Development Intern · ApexPlanet Software Pvt. Ltd.

- 🔗 [LinkedIn](https://www.linkedin.com/in/manoj-mukkamula/)
- 🐙 [GitHub](https://github.com/manoj-mukkamula)
- 📧 mukkamulamanoj@gmail.com

---

> This project was built as **Task 5 (Final Project and Optimization)** of the **ApexPlanet 45-Day Web Development Internship** (HTML, CSS & JavaScript).
