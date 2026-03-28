# Task 4 – Full Project Implementation

ApexPlanet Web Development Internship

This project is submitted as Task 4 of the ApexPlanet Web Development Internship.

## 📌 Objective

The objective of Task 4 was to:
- Build a personal portfolio website with About, Skills, Projects, and Contact sections
- Create a To-Do / Note-Taking app with localStorage persistence
- Develop a Product Listing Page with search, filtering, and sorting options

---

## 🚀 Project Overview

**Task 4** is a full project suite consisting of three interconnected web applications, all linked from a central portfolio website:

1. **Portfolio Website** (`index.html`) — A professional multi-page portfolio showcasing personal info, skills, projects, and contact details
2. **TechStore – Product Listing** (`product-app.html`) — An interactive product listing page with real images, search, category filter, price range slider, and sort options
3. **NoteVault – Task Manager** (`todo-app.html`) — A full-featured to-do app with add, edit, delete, complete, filter, sort, and localStorage persistence

---

## 🛠 Technologies Used

- HTML5
- CSS3 (Flexbox, CSS Grid, CSS Variables, Media Queries, Animations)
- JavaScript (Vanilla JS — DOM Manipulation, localStorage, Event Handling, IntersectionObserver)
- Google Fonts (Poppins, Montserrat)
- Font Awesome 6 (Icons)

---

## 🔗 Live Demo

View the live project here:  
[Task 4 Live Link](https://manoj-mukkamula.github.io/ApexPlanet-Internship/Task%204/)

---

## 📂 Features Implemented

### 1. Portfolio Website (`index.html`)
- Sticky navbar with blur effect and scroll shadow
- Active nav link highlighting on scroll
- Hamburger menu for mobile with smooth open/close animation
- Hero section with animated blobs, grid overlay, and fade-in stagger animation
- About section with personal stats (Internships, Projects, CGPA)
- Skills section with 3 categories: Frontend, Backend & DB, Tools
- Projects section with filter tabs (All / Internship / Personal) — 6 project cards with GitHub and Live links
- Contact section with email, LinkedIn, and GitHub cards
- Scroll reveal animation using IntersectionObserver
- Fully responsive — mobile, tablet, desktop

### 2. TechStore – Product Listing (`product-app.html`)
- 24 real tech products across 6 categories (Laptops, Phones, Audio, Tablets, Accessories, Monitors)
- Real product images via Unsplash CDN with emoji fallback
- Live search (searches name, description, and category)
- Category filter dropdown
- Price range slider with live label update (₹5K – ₹2L)
- Sort by: Price Low→High, Price High→Low, Best Rated, Name A→Z
- Active filter tags showing current applied filters
- Loading spinner on initial load
- "No products found" state with reset button
- Card hover animations with lift and glow effect
- HOT / NEW badges on product cards
- Fully responsive grid layout

### 3. NoteVault – Task Manager (`todo-app.html`)
- Add tasks with Enter key or Add button
- Edit tasks via modal popup
- Delete individual tasks
- Mark tasks complete/incomplete via checkbox
- Clear all completed tasks at once
- Filter tasks: All / Pending / Completed
- Sort tasks: Newest First / Oldest First / A → Z
- Stats section: Total, Pending, Completed counts
- Timestamp shown per task (date + time)
- localStorage persistence — tasks saved across page refreshes
- Empty state UI when no tasks exist
- Keyboard support: Enter to add/save, Escape to close modal
- XSS protection via HTML escaping
- Fully responsive layout

---

## 📁 File Structure

```
Task 4/
├── index.html          ← Portfolio (main entry point)
├── style.css           ← Portfolio styles
├── script.js           ← Portfolio JavaScript
├── product-app.html    ← TechStore Product Listing
├── products.css        ← Product page styles
├── products.js         ← Product page JavaScript
├── todo-app.html       ← NoteVault Task Manager
├── todo.css            ← Todo app styles
├── todo.js             ← Todo app JavaScript
└── images/             ← Local image assets (if any)
```

---

## 👤 Author

Mukkamula Manoj  
Web Development Intern  
GitHub: https://github.com/manoj-mukkamula  
LinkedIn: https://www.linkedin.com/in/manoj-mukkamula/

---

This project fulfills all requirements specified in Task 4 of the ApexPlanet Web Development Internship.